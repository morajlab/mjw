# Options
INIT_OPT="--init"

CACHE_DIR_NAME=$(echo -n $(pwd) | md5sum | cut -d' ' -f1)
CACHE_FORMAT_PATH="$MJW_CACHE_PATH/$CACHE_DIR_NAME/format"

init() {
  local dest_format_config_path="$(pwd)/.prettierrc.js"
  local dest_format_config_content=""

  mkdir -p $CACHE_FORMAT_PATH

  if [[ -f $dest_format_config_path ]]; then
    dest_format_config_content="...require(\"$dest_format_config_path\"),"
    echo "INFO:: Custom formatter configuration founded at '$dest_format_config_path'"
  fi

cat <<- EOF > $CACHE_FORMAT_PATH/.prettierrc.js
module.exports = {...require("@morajlab/npm.config.prettier"),$dest_format_config_content};
EOF

  echo "MJW formatter initialized successfully."
}

format() {
  local args=${*:2}

  while [ "$#" -gt 0 ]; do
    case "${1^^}" in
      "${INIT_OPT^^}")
        init
        exit 0
      ;;
      *)
        shift
      ;;
    esac
  done

  if [[ ! -f $CACHE_FORMAT_PATH/.prettierrc.js ]]; then
    init
  fi

  $MJW_NODE_BIN_PATH/prettier --config $CACHE_FORMAT_PATH/.prettierrc.js $args
}
