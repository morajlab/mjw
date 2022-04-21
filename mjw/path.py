import os


def getRootPath():
    return os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

def getPackagesPath(*path):
  return os.path.join(getRootPath(), "packages", *path)
