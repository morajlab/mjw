source "$MJW_COMMANDS_PATH/clone.sh"

install() {
  local search_path=$(pwd)
  [ ! -z "$2" ] && search_path="$2"
  local configs=$(find $search_path -name "mjw.config.yml")

  for conf in ${configs[@]}; do
    local base="$(dirname $conf)"
    local next_path="$base/packages"

    clone -- "--clone-all" $base
    [ -d $next_path ] && install -- $next_path
  done
}
