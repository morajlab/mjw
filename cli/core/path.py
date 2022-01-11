from os import path


def getRoot():
    return path.abspath(path.join(path.dirname(__file__), "..", ".."))
