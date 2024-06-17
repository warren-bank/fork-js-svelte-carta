@echo off

call "%~dp0..\env.bat"

set src_root=%~dp0..\..\..\00-node-modules\packages
set dst_root=%~dp0..\..\..\%build_dir%\packages

call :make_link ".."
call :make_link "carta-md"
call :make_link "plugin-anchor"
call :make_link "plugin-attachment"
call :make_link "plugin-code"
call :make_link "plugin-emoji"
call :make_link "plugin-math"
call :make_link "plugin-slash"
call :make_link "plugin-tikz"

goto :done

:make_link
  set pkg=%~1
  set src_dir=%src_root%\%pkg%\node_modules
  set dst_dir=%dst_root%\%pkg%
  if not exist "%dst_dir%" goto :eof
  set dst_dir=%dst_root%\%pkg%\node_modules
  if exist "%dst_dir%" rmdir /Q "%dst_dir%"
  mklink /D "%dst_dir%" "%src_dir%"
  echo.
  goto :eof

:done
  echo.
  pause
