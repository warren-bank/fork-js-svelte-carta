@echo off
setlocal enabledelayedexpansion

call "%~dp0..\env.bat"

set pad_unit=x\
set pad=%pad_unit%

call :make_link "0" ".."
call :make_link "0" "carta-md"
call :make_link "0" "plugin-anchor"
call :make_link "0" "plugin-attachment"
call :make_link "0" "plugin-code"
call :make_link "0" "plugin-emoji"
call :make_link "0" "plugin-math"
call :make_link "0" "plugin-slash"
call :make_link "0" "plugin-tikz"
call :make_link "1" "carta-md"
call :make_link "2" "plugin-anchor"
call :make_link "2" "plugin-attachment"
call :make_link "2" "plugin-code"
call :make_link "2" "plugin-emoji"
call :make_link "2" "plugin-math"
call :make_link "2" "plugin-slash"
call :make_link "2" "plugin-tikz"

goto :done

:make_link
  set mode=%~1
  set pkg=%~2
  set pkg_scope=
  set src_dir=
  set dst_dir=
  if "!mode!"=="2" (
    set pkg_scope=\@cartamd
    set mode=1
  )
  if "!mode!"=="1" (
    set src_dir=%dir_root_builds%\%build_dir%\packages\!pkg!
    if not exist "!src_dir!" (
      set src_dir=%dir_root_builds%\%fallback_build_dir%\packages\!pkg!
    )
    set dst_dir=%dir_root_dev_server%\node_modules!pkg_scope!
    if not exist "!dst_dir!" (
      mkdir "!dst_dir!"
    )
    set dst_dir=!dst_dir!\!pkg!
  )
  if "!mode!"=="0" (
    set src_dir=%dir_root_node_modules%\packages\!pkg!\node_modules
    set dst_dir=%dir_root_dev_server%\!pad!node_modules
    set pad=!pad!%pad_unit%
  )
  if exist "!src_dir!" (
    if exist "!dst_dir!" rmdir /Q "!dst_dir!"
    mklink /D "!dst_dir!" "!src_dir!"
    echo.
  )
  goto :eof

:done
  endlocal
  echo.
  pause
