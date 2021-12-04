run() {
  local command_path=""
  local sub_command=""

  while IFS=':' read -ra cmd; do
    [ ! ${#cmd[@]} -gt 1 ] &&
    echo "ERROR:: command is invalid !" &&
    exit 1

    command_path="$MJW_PACKAGES_PATH/${cmd[0]}/mjw.sh"
    sub_command=${cmd[1]}
  done <<< $2

  if [ ! -f $command_path ]; then
    echo "ERROR:: command is invalid !"
    exit 1
  fi

  source $command_path &&
  "$sub_command" $*
}
