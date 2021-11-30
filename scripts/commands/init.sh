exec_command() {
  if ! command -v yq &> /dev/null; then
    snap install yq
  fi
}
