get_dependency_url() {
  if [ ! -z "$1" ]; then
    echo $(cat ../config.yml | yq e ".dependencies[] | select(.name == \"$1\") | .url" -)
  else
    while IFS=' ' read -ra ADDR; do
      echo ${ADDR[@]}
    done <<< $(cat ../config.yml | yq e ".dependencies[].url" -)
  fi
}

dependency_exist() {
  cat ./config.yml |
  yq e ".dependencies[] | (.name == \"$1\")" - |
  grep "true" &> /dev/null
}
