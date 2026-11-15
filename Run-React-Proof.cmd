@echo off
setlocal
pushd "%~dp0" || exit /b 1

uv sync --locked || goto failed
call npm.cmd --prefix web ci --no-audit --no-fund || goto failed
if not exist "web\dist\index.html" (
    call npm.cmd --prefix web run build || goto failed
)
call npm.cmd --prefix web run proof:connected || goto failed

popd
exit /b 0

:failed
popd
exit /b 1
