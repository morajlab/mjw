#!/usr/bin/env bash
#
## @file
## @brief Format command source
##

FORMATTER_CONFIG_FILE_NAME=".prettierrc.js"
CACHE_DIR_NAME=$(echo -n $(pwd) | md5sum | cut -d' ' -f1)
CACHE_FORMATTER_PATH="$MJW_CACHE_PATH/$CACHE_DIR_NAME/format"
CACHE_FORMATTER_CONFIG_PATH=$CACHE_FORMATTER_PATH/$FORMATTER_CONFIG_FILE_NAME
FORMATTER_BIN_PATH=$MJW_NODE_BIN_PATH/prettier
DEST_FORMATTER_CONFIG_PATH="$(pwd)/$FORMATTER_CONFIG_FILE_NAME"


## @fn init()
## @brief Initialize formatter
##
## Create configuration files for formatter
init() {
  local dest_formatter_config_content=""

  mkdir -p $CACHE_FORMATTER_PATH

  if [[ -f $DEST_FORMATTER_CONFIG_PATH ]]; then
    dest_formatter_config_content="...require(\"$DEST_FORMATTER_CONFIG_PATH\"),"
    echo "INFO:: Custom formatter configuration founded at '$DEST_FORMATTER_CONFIG_PATH'"
  fi

cat <<- EOF > $CACHE_FORMATTER_CONFIG_PATH
module.exports = {...require("@morajlab/npm.config.prettier"),$dest_formatter_config_content};
EOF

  echo "MJW formatter initialized successfully."
}

format() {
  if [[ ! -f $CACHE_FORMATTER_CONFIG_PATH ]]; then
    init
  fi

  $FORMATTER_BIN_PATH --config $CACHE_FORMATTER_CONFIG_PATH --write --ignore-unknown ${*:2}
}
