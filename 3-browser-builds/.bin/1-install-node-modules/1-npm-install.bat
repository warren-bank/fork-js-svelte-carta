@echo off

set root_dir=%~dp0..\..\00-node-modules

call :npm_install ""

goto :done

:npm_install
  set rel_path=%~1
  set pkg_dir=%root_dir%%rel_path%
  if not exist "%pkg_dir%\node_modules" (
    echo installing .%rel_path%
    cd /D "%pkg_dir%"
    call npm install
    echo.
  )
  goto :eof

:done
  echo.
  pause
