// Screenshots of each Start run step, the review and the confirmation dialog on the synthetic
// Northbridge drive, at one width. Usage: node shoot-steps.cjs <out-dir> <width> [prefix]
// Stops before Submit is confirmed: nothing is started. With PAID=1 the page is shown in live mode
// as web/scripts/connected-proof.mjs does (the mode tag rewritten, every Submit request aborted),
// to see the paid wording; the service stays the offline synthetic one.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const proof = path.resolve(__dirname, '../../../../proof');
const ORIGIN = process.env.PREVIEW_ORIGIN || 'http://127.0.0.1:8765';
const [, , outDir, width = '1440', prefix = 'start'] = process.argv;
(async () => {
  const w = Number(width);
  const b = await chromium.launch();
  const page = await (await b.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 })).newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e).slice(0, 300)));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text().slice(0, 300)));
  const x = { exact: true };
  const paid = process.env.PAID === '1';
  if (paid) {
    await page.route(/\/api\/submissions\/[^/]+\/submit$/u, (route) => route.abort());
    await page.route((url) => url.origin === ORIGIN && (url.pathname === '/' || url.pathname === '/start'), async (route) => {
      const result = await route.fetch({ maxRedirects: 0 });
      const body = (await result.text()).replace('name="credit-os-mode" content="synthetic"', 'name="credit-os-mode" content="live"');
      await route.fulfill({ response: result, body });
    });
  }
  // The shell scrolls inside <main>, so the viewport is grown to the page's height for each shot.
  const shot = async (name) => {
    await page.waitForTimeout(400);
    const file = path.join(outDir, `${prefix}-${name}-${width}.png`);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const height = await page.evaluate(() => {
      const main = document.querySelector('main');
      main?.scrollTo(0, 0);
      return Math.max(main?.scrollHeight ?? 0, document.documentElement.scrollHeight);
    });
    await page.setViewportSize({ width: w, height: Math.min(height + 80, 12000) });
    await page.waitForTimeout(300);
    await page.screenshot({ path: file, animations: 'disabled' });
    await page.setViewportSize({ width: w, height: 900 });
    console.log(JSON.stringify({ name, file, overflow, height }));
  };
  await page.goto(ORIGIN + '/start');
  await page.getByLabel('Issuer name', x).waitFor();
  await shot('1-documents-empty');
  await page.getByLabel('Issuer name', x).fill('Northbridge Synthetic Group');
  await page.getByLabel('As-of date', x).fill('2025-03-31');
  await page.getByLabel('Your name', x).fill('Ana L');
  const files = [['northbridge-filing.txt', 'text/plain'], ['northbridge-portfolio.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'], ['northbridge-credit-agreement.txt', 'text/plain']];
  await page.getByLabel('Documents', x).setInputFiles(files.map(([name, mimeType]) => ({ name, mimeType, buffer: fs.readFileSync(path.join(proof, name)) })));
  await page.getByRole('button', { name: 'Inspect documents', ...x }).click();
  await page.getByText(/3 documents inspected/).waitFor({ timeout: 30000 });
  await shot('1-documents-inspected');
  await page.getByRole('button', { name: 'Continue to purpose', ...x }).click();
  await page.getByRole('radio', { name: 'Full credit assessment', ...x }).waitFor();
  await shot('2-purpose');
  await page.getByRole('button', { name: 'Continue to context', ...x }).click();
  await page.getByLabel(/Anything the analysis should know/u).fill('Check the 2028 maturities.\nInclude refinancing risk.');
  await page.getByRole('combobox', { name: 'Portfolio workbook', ...x }).selectOption({ label: 'northbridge-portfolio.xlsx' });
  await page.getByRole('combobox', { name: 'Legal documents', ...x }).selectOption('executed');
  await page.getByRole('combobox', { name: 'The agreement', ...x }).selectOption({ label: 'northbridge-credit-agreement.txt' });
  const ratings = page.getByRole('region', { name: 'Ratings', ...x });
  await ratings.getByRole('button', { name: 'Add rating', ...x }).click();
  await ratings.getByLabel('Agency', x).selectOption("Moody's"); await ratings.getByLabel('Scope', x).selectOption('issuer');
  await ratings.getByLabel('Rating', x).fill('B1'); await ratings.getByLabel('Outlook', x).selectOption('Negative'); await ratings.getByLabel('As-of', x).fill('2025-02-28');
  await shot('3-context');
  await page.getByRole('button', { name: 'Review run', ...x }).click();
  const submit = page.getByRole('button', { name: paid ? 'Submit, spend up to USD 25.00' : 'Submit run', ...x }); await submit.waitFor();
  // C2-007: how far below the step heading the limits to decide start.
  const limitsGap = await page.evaluate(() => {
    const heading = [...document.querySelectorAll('h2')].find((h) => h.textContent.trim() === 'Review and start');
    const limits = document.querySelector('section[aria-label="Limits to decide"]');
    return heading && limits ? Math.round(limits.getBoundingClientRect().top - heading.getBoundingClientRect().top) : null;
  });
  console.log(JSON.stringify({ limitsBelowHeading: limitsGap }));
  await shot('4-review');
  for (const c of await page.getByRole('region', { name: 'Limits to decide' }).getByRole('checkbox').all()) await c.check();
  await page.getByRole('checkbox', { name: 'Approve: I have read this summary and want this run started', ...x }).check();
  await shot('4-review-approved');
  await submit.click();
  await page.getByRole('dialog').waitFor();
  await page.waitForTimeout(400);
  const file = path.join(outDir, `${prefix}-5-dialog-${width}.png`);
  await page.screenshot({ path: file, animations: 'disabled' });
  console.log(JSON.stringify({ name: 'dialog', file }));
  await page.getByRole('dialog').getByRole('button', { name: 'Cancel', ...x }).click();
  console.log(JSON.stringify({ errors }));
  await b.close();
})().catch((e) => { console.error(String(e).slice(0, 600)); process.exit(1); });
