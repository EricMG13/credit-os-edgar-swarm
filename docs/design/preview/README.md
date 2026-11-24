# Previewing the connected app on the synthetic Northbridge run

For design work only. Nothing here calls a provider or spends money: `proof.serve` replaces the
model with canned replies. The synthetic text is thin (every module says the same sentence), so
check layout and states here and check content against the retained TransDigm fixtures in tests.

```bash
# 1. Dependencies. The repo pins uv 0.12.5; if the machine's uv is older, install it in a venv.
python3 -m venv ~/uvenv && ~/uvenv/bin/pip install -q uv==0.12.5 && ~/uvenv/bin/uv sync -q
(cd web && npm ci --no-audit --no-fund && npm run build)

# 2. Publish one synthetic run. The root must be new, empty, outside the repo, and its path at
#    most 80 characters.
PYTHONPATH=src .venv/bin/python -m proof.serve --root ~/cos-ws --port 8765 &
node docs/design/preview/drive-synthetic-run.cjs      # prints the report address

# 3. After every `npm run build`, restart the viewer (it reads the built page at start), then shoot.
pkill -f "proof.serve|react_frontend --root" ; \
  PYTHONPATH=src .venv/bin/python -m react_frontend --root ~/cos-ws --port 8765 &
node docs/design/preview/screenshot.cjs "/report/<run>#overview" ~/overview.png 1440
node docs/design/preview/screenshot.cjs "/report/<run>#overview" ~/overview-390.png 390
```

`require('playwright')` resolves from any directory in the cloud container; elsewhere run the
scripts from `web/`.
