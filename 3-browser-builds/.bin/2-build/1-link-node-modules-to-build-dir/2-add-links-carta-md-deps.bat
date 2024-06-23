@echo off

call "%~dp0..\env.bat"

set src_dir=%~dp0..\..\..\..\1-builds\00-node-modules\packages\carta-md\node_modules
set dst_dir=%~dp0..\..\..\%build_dir%\carta-md-deps\node_modules

if exist "%dst_dir%" rmdir /Q "%dst_dir%"
mklink /D "%dst_dir%" "%src_dir%"

echo.
pause
