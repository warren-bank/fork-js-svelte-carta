@echo off

call "%~dp0..\env.bat"

set build_root=%~dp0..\..\..\%build_dir%

call :build_all_pkgs

goto :done

:build_all_pkgs
  cd /D "%build_root%"
  if exist "dist" rmdir /Q /S "dist"
  echo bundling browser build..
  echo.
  call npm run build
  goto :eof

:done
  echo.
  pause
