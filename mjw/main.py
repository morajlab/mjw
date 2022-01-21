import os
import subprocess
import tomlkit
from .path import getRootPath, getPackagesPath
from .git import checkout
from git import Repo

root_repo = Repo(getRootPath())

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
          checkout(getPackagesPath(package), root_repo.active_branch)
          makefile = getPackagesPath(package, "Makefile")

          if os.path.exists(makefile):
            subprocess.run([makefile, "virtualenv"], check=True)

          print("Package '%s' installed." % package)
        except Exception as error:
          raise error



def sync():
  with os.scandir(getPackagesPath()) as ent:
    for entry in ent:
        if entry.is_dir():
            checkout(getPackagesPath(entry.name), str(root_repo.active_branch))
            print("Checkout package '{}' to branch '{}'".format(entry.name, root_repo.active_branch))

def mjw():
  pass
