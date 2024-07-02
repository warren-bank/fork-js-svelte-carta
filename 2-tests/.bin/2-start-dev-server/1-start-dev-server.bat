@echo off

call "%~dp0..\env.bat"

set remove_cache=0

set dir_dev_server=%dir_root_dev_server%\%dir_root_dev_server_padding%

cd /D "%dir_dev_server%"

if "%remove_cache%"=="1" (
  if exist ".svelte-kit"  rmdir /Q /S ".svelte-kit"
  if exist "node_modules" rmdir /Q /S "node_modules"
)

call npm run dev

:done
  echo.
  pause
