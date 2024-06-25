@echo off
setlocal enabledelayedexpansion

call "%~dp0..\env.bat"

set src_dir=%~dp0..\..\..\%build_dir%\packages\carta-md
if not exist "!src_dir!" (
  set src_dir=%~dp0..\..\..\%fallback_build_dir%\packages\carta-md
)
if not exist "!src_dir!" (
  echo directory for 'carta-md' build not found
  goto :done
)
set dst_root=%~dp0..\..\..\00-node-modules\packages
set dst_path=node_modules\carta-md

call :make_link "plugin-anchor"
call :make_link "plugin-attachment"
call :make_link "plugin-code"
call :make_link "plugin-emoji"
call :make_link "plugin-math"
call :make_link "plugin-slash"
call :make_link "plugin-tikz"

goto :done

:make_link
  set dst_pkg=%~1
  set dst_dir=%dst_root%\%dst_pkg%\%dst_path%
  if exist "%dst_dir%" rmdir /Q "%dst_dir%"
  mklink /D "%dst_dir%" "!src_dir!"
  echo.
  goto :eof

:done
  endlocal
  echo.
  pause
