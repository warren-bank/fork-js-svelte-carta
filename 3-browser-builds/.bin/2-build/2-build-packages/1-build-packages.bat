@echo off

call "%~dp0..\env.bat"

set pkg_root=%~dp0..\..\..\%build_dir%\packages

call :clean_pkg "carta-md"
call :clean_pkg "plugin-anchor"
call :clean_pkg "plugin-attachment"
call :clean_pkg "plugin-code"
call :clean_pkg "plugin-emoji"
call :clean_pkg "plugin-math"
call :clean_pkg "plugin-slash"
call :clean_pkg "plugin-tikz"

call :build_all_pkgs

goto :done

:clean_pkg
  set pkg=%~1
  set pkg_dir=%pkg_root%\%pkg%
  if exist "%pkg_dir%\dist" rmdir /Q /S "%pkg_dir%\dist"
  goto :eof

:build_all_pkgs
  cd /D "%pkg_root%\.."
  echo bundling browser build..
  echo.
  call npm run build
  goto :eof

:done
  echo.
  pause
