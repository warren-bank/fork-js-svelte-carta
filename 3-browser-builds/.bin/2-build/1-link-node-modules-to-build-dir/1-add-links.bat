@echo off

call "%~dp0..\env.bat"

set src_root=%~dp0..\..\..\00-node-modules\packages
set dst_root=%~dp0..\..\..\%build_dir%\packages

call :make_link ".."

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
