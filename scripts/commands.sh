commands() {
  local command_path="$MJW_COMMANDS_PATH/$1.sh"

  if [ ! -f $command_path ]; then
    source $MJW_ROOT_PATH/env/bin/activate &&
    mjw $*
  else
    source $command_path &&
    "$1" $*
  fi
}
