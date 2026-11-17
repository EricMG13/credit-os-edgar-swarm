// T22 native fidelity probe. Start a fresh proof.serve, then set T22_BASE, CHROME_PATH and EDGE_PATH.
// Optional T22_RUN reuses an existing synthetic run; T22_OUTPUT selects the evidence directory.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const repo = path.resolve(__dirname, '../../../../../..');
const outputDir = process.env.T22_OUTPUT || path.join(repo, 'scratch/t22-native');
fs.mkdirSync(outputDir, {recursive:true});
const lib = require(path.join(repo, 'docs/audit/2026-11-16-final/output/2-sections/C5/probes/c5lib.cjs'));
const base=process.env.T22_BASE;
if (!base || !/^http:\/\/(127\.0\.0\.1|localhost):\d+$/.test(base)) throw new Error('Set T22_BASE to a local synthetic proof.serve origin');
if (!process.env.CHROME_PATH || !process.env.EDGE_PATH) throw new Error('Set CHROME_PATH and EDGE_PATH to the installed native browsers');
(async()=>{
  const results=[];let run=process.env.T22_RUN;
  for(const [brand,executable] of [['Chrome',process.env.CHROME_PATH],['Edge',process.env.EDGE_PATH]]){
    const browser=await lib.chromium.launch({executablePath:executable,headless:true});
    try{
      const log=lib.newLog();const context=await lib.guardedContext(browser,log);const page=await context.newPage();
      if(!run){const done=await lib.completeRun(page,base);assert.match(done.status,/Finished/);run=done.run;fs.writeFileSync(path.join(outputDir,'run.txt'),run);}
      const snapshot=await (await fetch(base+'/connected/snapshot')).json();
      const outputs=Object.values(snapshot.workspace.outputs).filter(o=>o.confidence && 'value' in o.confidence);
      assert(outputs.length>=14);
      for(const output of outputs){
        assert.equal(output.confidence.value,89);assert.equal(output.confidence.band,'High');
        assert.equal(output.confidenceTrace.inputs.length,14);
        const raw=await (await page.request.get(`${base}/library/downloads/${run}/${output.module}.md`)).text();
        assert.equal(createHash('sha256').update(raw).digest('hex'),output.sha256);
        const accepted=Object.fromEntries(output.confidenceTrace.inputs.map(({label})=>[label,undefined]));
        for(const match of raw.matchAll(/^\| ([^|]+) \| ([^|]*) \|$/gm)) if(Object.hasOwn(accepted,match[1].trim())) accepted[match[1].trim()]=match[2].trim();
        assert.deepEqual(output.confidenceTrace.inputs.map(({label,value})=>[label,value]),Object.entries(accepted));
        await page.goto(`${base}/report/${run}#modules/${output.module}`);
        const tile=page.getByText('Confidence score',{exact:true}).locator('..');
        await tile.getByRole('button',{name:'Show sources for this figure',exact:true}).click();
        const dialog=page.getByRole('dialog');await dialog.waitFor();const text=await dialog.innerText();
        assert(text.includes('89 out of 100 · High'));assert(!text.includes('the row cites no page or register'));
        for(const {label,value} of output.confidenceTrace.inputs) assert.equal((await dialog.getByText(label,{exact:true}).locator('..').innerText()).replace(/\s+/g,' ').trim(),`${label} ${value}`);
        for(const {label,value} of output.confidenceTrace.method) assert(text.includes(label)&&text.includes(value));
        const href=await dialog.getByRole('link',{name:'Open in Evidence'}).getAttribute('href');
        assert(href.includes(encodeURIComponent(output.id)+'~'+output.sha256));
        if(output.module==='CP-1') await dialog.screenshot({path:path.join(outputDir,`${brand.toLowerCase()}-drawer.png`)});
        results.push({brand,version:browser.version(),module:output.module,score:output.confidence,inputs:output.confidenceTrace.inputs,method:output.confidenceTrace.method,source:href});
        await dialog.getByRole('button',{name:'Close',exact:true}).last().click();
      }
      assert.deepEqual(log.blocked,[]);assert.deepEqual(log.pageErrors,[]);results.push({brand,externalRequests:log.blocked.length,pageErrors:log.pageErrors.length});
      await context.close();
    }finally{await browser.close();}
  }
  fs.writeFileSync(path.join(outputDir,'native.json'),JSON.stringify({run,results},null,2));
  console.log(`Passed ${results.filter(r=>r.module).length} native module drawers, ${run}.`);
})().catch(e=>{console.error(e);process.exitCode=1});
