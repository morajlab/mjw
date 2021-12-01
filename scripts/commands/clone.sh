source "$MJW_SOURCE_PATH/config.sh"

# Options
CLONE_ALL_OPT="--clone-all"

# Clone to packages directory
clone_repo() {
  git clone "$1"
}

clone() {
  [ ! "$#" -gt 1 ] &&
  echo "ERROR:: options are invalid !" &&
  exit 1

  (
    [ "$2" != "$CLONE_ALL_OPT" ] &&
    [ ! $(dependency_exist "$2" && echo 0) ]
  ) &&
  echo "ERROR:: package '$2' doesn't exist !" &&
  exit 1

  local base_path=$(pwd)
  [ ! -z "$3" ] && base_path="$3"
  local packages_path="$base_path/packages"

  ( [ -d $packages_path ] || mkdir $packages_path ) &&
  cd $packages_path

  if [ "$2" == "$CLONE_ALL_OPT" ]; then
    local dependencies_array=$(get_dependency_url)

    for dep in ${dependencies_array[@]}; do
      clone_repo "$dep"
    done
  else
    clone_repo $(get_dependency_url "$2")
  fi
}
