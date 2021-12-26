# Options
CLEAN_ALL_OPT="--clean-all"

clean_all() {
  rm -rf $MJW_CACHE_PATH &&
  echo "All cache cleaned successfully."
}

cache() {
  while [ "$#" -gt 0 ]; do
    case "${1^^}" in
      "${CLEAN_ALL_OPT^^}")
        clean_all
        exit 0
      ;;
      *)
        shift
      ;;
    esac
  done
}
