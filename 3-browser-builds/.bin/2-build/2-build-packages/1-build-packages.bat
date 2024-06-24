@echo off

call "%~dp0..\env.bat"

set pkg_root=%~dp0..\..\..\%build_dir%\packages

call :build_pkg "carta-md"
call :build_pkg "plugin-anchor"
call :build_pkg "plugin-attachment"
call :build_pkg "plugin-code"
call :build_pkg "plugin-emoji"
call :build_pkg "plugin-math"
call :build_pkg "plugin-slash"
call :build_pkg "plugin-tikz"

goto :done

:build_pkg
  set pkg=%~1
  set pkg_dir=%pkg_root%\%pkg%
  if not exist "%pkg_dir%\package.json" goto :eof
  if exist "%pkg_dir%\dist" goto :eof
  cd /D "%pkg_dir%"
  echo bundling browser build for package: %pkg%
  call npm run build
  goto :eof

:done
  echo.
  pause
