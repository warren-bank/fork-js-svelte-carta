@echo off

call "%~dp0..\env.bat"

set dir_root=%~dp0..\..\..\%build_dir%\packages

call :run_build "carta-md"

goto :done

:run_build
  set pkg=%~1
  set pkg_dir=%dir_root%\%pkg%
  if not exist "%pkg_dir%" goto :eof
  if exist "%pkg_dir%\dist" goto :eof
  cd /D "%pkg_dir%"
  echo building: %pkg%
  call npm run build
  echo.
  goto :eof

:done
  echo.
  pause
