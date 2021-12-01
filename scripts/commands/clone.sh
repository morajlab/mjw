source ./src/config.sh

# Options
CLONE_ALL_OPT="--clone-all"

# Clone to packages directory
clone() {
  git clone "$1"
}

exec_command() {
  [ ! "$#" -gt 1 ] &&
  echo "ERROR:: options are invalid !" &&
  exit 1

  (
    [ "$2" != "$CLONE_ALL_OPT" ] &&
    [ ! $(dependency_exist "$2" && echo 0) ]
  ) &&
  echo "ERROR:: package '$2' doesn't exist !" &&
  exit 1

  [ ! -d ./packages ] && mkdir packages

  cd ./packages

  if [ "$2" == "$CLONE_ALL_OPT" ]; then
    local dependencies_array=$(get_dependency_url)

    for dep in ${dependencies_array[@]}; do
      clone "$dep"
    done
  else
    clone $(get_dependency_url "$2")
  fi
}
