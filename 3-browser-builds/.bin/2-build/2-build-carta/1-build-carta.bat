@echo off

call "%~dp0..\env.bat"

set pkg_dir=%~dp0..\..\..\%build_dir%

cd /D "%pkg_dir%"
echo building for browser: carta-md
call npm run build

echo.
pause
