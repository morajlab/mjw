CACHE_DIR_NAME=$(echo -n $(pwd) | md5sum | cut -d' ' -f1)
CACHE_LINTER_PATH="$MJW_CACHE_PATH/$CACHE_DIR_NAME/lint"
CACHE_LINTER_CONFIG_PATH=$CACHE_LINTER_PATH/$COMMIT_LINTER_CONFIG_FILE_NAME

declare -A LINTERS=(
  ["style"]=".stylelintrc.json"
  ["commit"]="commitlint.config.js"
)

# Options
TYPE_OPT="--type"

init() {
  CACHE_LINTER_CONFIG_PATH=$CACHE_LINTER_PATH/${LINTERS[$1]}
  local DEST_LINTER_CONFIG_PATH="$(pwd)/${LINTERS[$1]}"
  local dest_linter_config_content=""
  local cache_config_content=""

  if [[ ! -f $CACHE_LINTER_CONFIG_PATH ]]; then
    mkdir -p $CACHE_LINTER_PATH

    if [[ -f $DEST_LINTER_CONFIG_PATH ]]; then
      dest_linter_config_content=",\"$DEST_LINTER_CONFIG_PATH\""
      echo "INFO:: Custom linter configuration founded at '$DEST_LINTER_CONFIG_PATH'"
    fi

    case $1 in
      "style")
        cache_config_content="{\"extends\":\"stylelint-config-standard\"}"
      ;;
      "commit")
        cache_config_content="module.exports = {
        extends:[\"@commitlint/config-conventional\"$dest_linter_config_content]
        };"
      ;;
      *)
      ;;
    esac

    echo $cache_config_content > $CACHE_LINTER_CONFIG_PATH

    echo "MJW $1 linter initialized successfully."
  fi
}

commit_lint() {
  $MJW_NODE_BIN_PATH/commitlint --config $CACHE_LINTER_CONFIG_PATH $*
}

style_lint() {
  $MJW_NODE_BIN_PATH/stylelint --config $CACHE_LINTER_CONFIG_PATH $*
}

lint() {
  local linter_type=""
  local args=()

	while [ "$#" -gt 0 ]; do
    case "${1^^}" in
      "${TYPE_OPT^^}")
        (
          [ -z $2 ] ||
          (
            index=${LINTERS[$2]} &&
            [[ $(echo ${#index}) = 0 ]]
          )
        ) &&
        echo "ERROR:: type '$2' is invalid !" &&
        exit 1

        linter_type=$2

        shift
        shift
      ;;
      *)
        args+=("$1")
        shift
      ;;
    esac
  done

  for l in ${!LINTERS[@]}; do
    (
      [ -z $linter_type ] ||
      [[ $linter_type = $l ]]
    ) &&
    init $l &&
    "$(echo $l)_lint" ${args[@]:1}
  done

  echo "Linter command executed successfully."
}
