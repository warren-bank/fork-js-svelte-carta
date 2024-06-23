@echo off

call "%~dp0..\env.bat"

set src_dir=%~dp0..\..\..\..\1-builds\%build_dir%\packages\carta-md
set dst_dir_root=%~dp0..\..\..\%build_dir%\carta-md-deps\carta-md\node_modules
set dst_dir=%dst_dir_root%\carta-md

if not exist "%dst_dir_root%" mkdir "%dst_dir_root%"

if exist "%dst_dir%" rmdir /Q "%dst_dir%"
mklink /D "%dst_dir%" "%src_dir%"

echo.
pause
