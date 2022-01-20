import os
import tomlkit
from .path import getRootPath, getPackagesPath
from git import Repo

def install():
  with open(os.path.join(getRootPath(), "mjw.config.toml")) as f:
    config = tomlkit.parse(f.read())
    packages = config["mjw"]["packages"]

    if os.path.exists(getPackagesPath()) is False:
      os.mkdir(getPackagesPath())

    for package, repo in packages.items():
      if os.path.exists(getPackagesPath(package)):
        print("Package '%s' exist." % package)
      else:
        try:
          Repo.clone_from(repo, getPackagesPath(package))
          print("Package '%s' installed." % package)
        except Exception as error:
          raise error
