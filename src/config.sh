get_dependency_url() {
  if [ ! -z "$1" ]; then
    echo $(cat ../mjw.config.yml | yq e ".devdependencies[] | select(.name == \"$1\") | .url" -)
  else
    while IFS=' ' read -ra ADDR; do
      echo ${ADDR[@]}
    done <<< $(cat ../mjw.config.yml | yq e ".devdependencies[].url, .dependencies[].url" -)
  fi
}

dependency_exist() {
  cat ./mjw.config.yml |
  yq e ".devdependencies[] | (.name == \"$1\")" - |
  grep "true" &> /dev/null
}
