@echo off

set fallback_build_dir=02-upstream-master
set fallback_build_dir=07-upstream-master

set build_dir=02-upstream-master
set build_dir=03a-PR-76
set build_dir=03b-PR-77
set build_dir=04a-PR-82
set build_dir=05a-PR-84
set build_dir=05b-PR-85
set build_dir=05c-PR-84
set build_dir=05d-PR-84
set build_dir=06a-PR-87
set build_dir=07-upstream-master
set build_dir=08a-PR-92
set build_dir=09a-PR-93
set build_dir=10a-PR-94

set dir_root_dev_server=%~dp0..\dev-server
set dir_root_dev_server_padding=x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x\x
set dir_root_builds=%~dp0..\..\1-builds
set dir_root_node_modules=%dir_root_builds%\00-node-modules
