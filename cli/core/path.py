import os


def getRootPath():
    return os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))


def getAbsPath(*path):
    return os.path.join(getRootPath(), *path)


def getCachePath(*path):
    return getAbsPath(".cache", *path)


def getTemplatePath(*path):
    return getAbsPath("cli", "templates", *path)
