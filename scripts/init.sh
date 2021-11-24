#!/usr/bin/env bash

# Load packages informations
source ./package.sh

# Clone to packages directory
clone_package() {
  git clone "$1"
}

clone() {
  cd ./packages

  if [ ! -z "$1" ] && [ ! -z "${packages[$1]}" ]; then
    clone_package "${packages[$1]}"
    exit 0
  fi

  for key in ${!packages[@]}; do
    clone_package "${packages[${key}]}"
  done
}
