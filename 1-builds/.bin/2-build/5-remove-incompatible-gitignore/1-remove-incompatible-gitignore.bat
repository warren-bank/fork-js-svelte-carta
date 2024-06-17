@echo off

call "%~dp0..\env.bat"

set dir_root=%~dp0..\..\..\%build_dir%\packages

call :remove_gitignore "carta-md"
call :remove_gitignore "plugin-anchor"
call :remove_gitignore "plugin-attachment"
call :remove_gitignore "plugin-code"
call :remove_gitignore "plugin-emoji"
call :remove_gitignore "plugin-math"
call :remove_gitignore "plugin-slash"
call :remove_gitignore "plugin-tikz"

goto :done

:remove_gitignore
  set pkg=%~1
  set file_path=%dir_root%\%pkg%\.gitignore
  if exist "%file_path%" del /F "%file_path%"
  goto :eof

:done
  echo.
  pause
