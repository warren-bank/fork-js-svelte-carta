@echo off

call "%~dp0..\env.bat"

set dir_dev_server=%dir_root_dev_server%\%dir_root_dev_server_padding%

cd /D "%dir_dev_server%"

call npm run dev

:done
  echo.
  pause
