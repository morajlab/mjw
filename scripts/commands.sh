commands() {
  local command_path="$MJW_COMMANDS_PATH/$1.sh"

  if [ ! -f $command_path ]; then
    echo "ERROR:: command '$1' is invalid !"
    exit 1
  fi

  source $command_path &&
  "$1" $*
}
