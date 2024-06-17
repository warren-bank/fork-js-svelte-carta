@echo off

call "%~dp0..\env.bat"

set dir_root=%~dp0..\..\..\%build_dir%\packages

call :run_build "plugin-anchor"
call :run_build "plugin-attachment"
call :run_build "plugin-code"
call :run_build "plugin-emoji"
call :run_build "plugin-math"
call :run_build "plugin-slash"
call :run_build "plugin-tikz"

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
