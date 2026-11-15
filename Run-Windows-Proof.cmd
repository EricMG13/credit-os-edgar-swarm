@echo off
setlocal
pushd "%~dp0" || exit /b 1

if not exist ".legacy\.credit-os-revision" goto missing
if not exist "web\dist\index.html" goto missing

node -e "if (process.versions.node.split('.')[0] !== '24') { console.error('Install Node.js 24.'); process.exit(1); }" || goto failed
uv sync --locked --python 3.12.14 || goto failed
call npm.cmd --prefix web ci --no-audit --no-fund || goto failed
call npm.cmd --prefix web run proof:connected || goto failed

popd
exit /b 0

:missing
echo Extract the credit-os2 Windows release ZIP first. It includes the legacy source and React build. 1>&2
:failed
popd
exit /b 1
