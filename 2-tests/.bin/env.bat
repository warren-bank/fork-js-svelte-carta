@echo off

set fallback_build_dir=02-upstream-master

set build_dir=02-upstream-master
set build_dir=03a-PR-76
set build_dir=03b-PR-77

set dir_root_dev_server=%~dp0..\dev-server
set dir_root_dev_server_padding=x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x
set dir_root_builds=%~dp0..\..\1-builds
set dir_root_node_modules=%dir_root_builds%\00-node-modules
