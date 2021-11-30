# Load packages informations
source ./package.sh

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

  ( [ "$2" != "$CLONE_ALL_OPT" ] && [ -z "${packages[$2]}" ]) &&
  echo "ERROR:: package '$2' doesn't exist !" &&
  exit 1

  [ ! -d ./dependencies ] && mkdir dependencies

  cd ./dependencies

  if [ "$2" == "$CLONE_ALL_OPT" ]; then
    for key in ${!packages[@]}; do
      clone "${packages[${key}]}"
    done
  else
    clone "${packages[$2]}"
  fi
}
