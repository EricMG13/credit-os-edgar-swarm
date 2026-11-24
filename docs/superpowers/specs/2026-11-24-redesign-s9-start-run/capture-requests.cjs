// Drives the synthetic Northbridge run exactly as docs/design/preview/drive-synthetic-run.cjs does
// and records every request the Start run page sends, from the first page load to Submit. Usage:
//   node capture-requests.cjs <out.json> [<proof.serve root>]
// With the root, the bytes the service stored for each upload are hashed too (the browser does
// not expose a File body to Playwright).
// Ids the service makes (submission, run) are replaced by placeholders, and the submit digest is
// checked against the one the summary returned, so two captures of the same drive compare equal.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const proof = path.resolve(__dirname, '../../../../proof');
const ORIGIN = process.env.PREVIEW_ORIGIN || 'http://127.0.0.1:8765';
const out = process.argv[2];
(async () => {
  const b = await chromium.launch();
  const page = await (await b.newContext({ viewport: { width: 1440, height: 1000 } })).newPage();
  const x = { exact: true };
  const log = [];
  let recording = true;
  page.on('request', (request) => {
    const url = new URL(request.url());
    if (!recording || url.origin !== ORIGIN) return;
    if (!/^\/(api|connected)\//u.test(url.pathname)) return;
    const headers = request.headers();
    const buffer = request.postDataBuffer();
    const type = headers['content-type'] || '';
    const entry = { method: request.method(), path: url.pathname + url.search };
    const kept = {};
    for (const name of ['content-type', 'x-shown-cap']) if (name in headers) kept[name] = headers[name];
    entry.headers = kept;
    if (buffer) {
      // The exact text is kept for the byte check after the ids are replaced; `body` is for reading.
      entry.raw = buffer.toString('utf8');
      entry.body = type.startsWith('application/json') ? JSON.parse(entry.raw) : undefined;
    }
    log.push(entry);
    if (/\/submit$/u.test(url.pathname)) recording = false;
  });
  const responses = {};
  page.on('response', async (response) => {
    const url = new URL(response.url());
    if (url.pathname === '/api/submissions' && response.request().method() === 'POST')
      responses.submission = (await response.json()).id;
    if (/\/summary$/u.test(url.pathname)) responses.digest = (await response.json()).digest;
  });
  await page.goto(ORIGIN + '/');
  await page.locator('main footer').getByRole('link', { name: 'Start a run', ...x }).click();
  await page.getByLabel('Issuer name', x).fill('Northbridge Synthetic Group');
  await page.getByLabel('As-of date', x).fill('2025-03-31');
  await page.getByLabel('Your name', x).fill('Ana L');
  const files = [['northbridge-filing.txt', 'text/plain'], ['northbridge-portfolio.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'], ['northbridge-credit-agreement.txt', 'text/plain']];
  await page.getByLabel('Documents', x).setInputFiles(files.map(([name, mimeType]) => ({ name, mimeType, buffer: fs.readFileSync(path.join(proof, name)) })));
  await page.getByRole('button', { name: 'Inspect documents', ...x }).click();
  await page.getByText(/3 documents inspected/).waitFor({ timeout: 30000 });
  await page.getByRole('button', { name: 'Continue to purpose', ...x }).click();
  await page.getByRole('radio', { name: 'Full credit assessment', ...x }).waitFor();
  await page.getByRole('button', { name: 'Continue to context', ...x }).click();
  await page.getByLabel(/Anything the analysis should know/u).fill('Check the 2028 maturities.\nInclude refinancing risk.');
  await page.getByRole('combobox', { name: 'Portfolio workbook', ...x }).selectOption({ label: 'northbridge-portfolio.xlsx' });
  await page.getByRole('combobox', { name: 'Legal documents', ...x }).selectOption('executed');
  await page.getByRole('combobox', { name: 'The agreement', ...x }).selectOption({ label: 'northbridge-credit-agreement.txt' });
  const ratings = page.getByRole('region', { name: 'Ratings', ...x });
  await ratings.getByRole('button', { name: 'Add rating', ...x }).click();
  await ratings.getByLabel('Agency', x).selectOption("Moody's"); await ratings.getByLabel('Scope', x).selectOption('issuer');
  await ratings.getByLabel('Rating', x).fill('B1'); await ratings.getByLabel('Outlook', x).selectOption('Negative'); await ratings.getByLabel('As-of', x).fill('2025-02-28');
  await page.getByRole('button', { name: 'Review run', ...x }).click();
  const submit = page.getByRole('button', { name: 'Submit run', ...x }); await submit.waitFor();
  for (const c of await page.getByRole('region', { name: 'Limits to decide' }).getByRole('checkbox').all()) await c.check();
  await page.getByRole('checkbox', { name: 'Approve: I have read this summary and want this run started', ...x }).check();
  await submit.click();
  await page.getByRole('dialog').getByRole('button', { name: 'Start synthetic run', ...x }).click();
  await page.waitForURL(/\/run\/\d{8}-\d{6}-\d{2}$/u);
  const run = page.url().split('/').at(-1);
  await b.close();
  const text = JSON.stringify(log, null, 1)
    .replaceAll(responses.submission, '<submission>')
    .replaceAll(responses.digest, '<digest from summary>');
  const shown = JSON.parse(text).map(({ raw, ...entry }) =>
    raw === undefined ? entry : { ...entry, rawSha256: crypto.createHash('sha256').update(raw).digest('hex') });
  const root = process.argv[3];
  const stored = {};
  if (root) {
    const drop = path.join(root, '_engine', 'drops', run);
    for (const name of fs.readdirSync(drop).filter((n) => n.startsWith('northbridge-')).sort())
      stored[name] = crypto.createHash('sha256').update(fs.readFileSync(path.join(drop, name))).digest('hex');
  }
  fs.writeFileSync(out, JSON.stringify({ navigatedTo: '/run/<run>', runIdShape: /^\d{8}-\d{6}-\d{2}$/u.test(run), storedUploads: stored, requests: shown }, null, 1) + '\n');
  console.log(`requests ${String(shown.length)} -> ${out}`);
})().catch((e) => { console.error(String(e).slice(0, 600)); process.exit(1); });
