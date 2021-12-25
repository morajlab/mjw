#!/usr/bin/env bash

WORKSPACE_PATH=$HOME/.mjw
REQUIRMENTS=(
  "curl"
  "unzip"
)

check_requirments() {
  local has_requirments=0

  for r in ${REQUIRMENTS[@]}; do
    if ! command -v $r &> /dev/null; then
      echo "ERROR:: \`$r\` doesn't exits !"
      has_requirments=1
    fi
  done

  if [[ $has_requirments = 1 ]]; then
    exit 1
  fi
}

download() {
  local temp_file_name="$(date +%s).zip"

  if [ -d $WORKSPACE_PATH ]; then
    rm -rf $WORKSPACE_PATH
  fi

  cd /tmp &&
  curl https://codeload.github.com/morajlab/workspace/zip/refs/heads/master -o $temp_file_name &&
  unzip $temp_file_name &&
  mv workspace-master $WORKSPACE_PATH &&
  rm $temp_file_name
}

set_path() {
cat <<- EOF >> ~/.bashrc

# mjw path
export PATH="$WORKSPACE_PATH/bin:\$PATH"
EOF
}

check_requirments
download
set_path

echo
echo 'Moraj Lab workspace installed successfully !'
