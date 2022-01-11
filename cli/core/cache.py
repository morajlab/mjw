import hashlib
import os
import shutil
from .path import getCachePath


class Cache:
    def __init__(self, key=None):
        self.hash = ""

        if key is not None:
            self.hash = hashlib.md5(key.encode("utf-8")).hexdigest()

    def getPath(self, *path):
        return getCachePath(self.hash, *path)

    def create(self, *path):
        os.makedirs(self.getPath(*path), exist_ok=True)

    def clear(self, *path):
        try:
            shutil.rmtree(self.getPath(*path))
        except FileNotFoundError:
            pass

    def clear_all(self):
        try:
            shutil.rmtree(getCachePath())
        except FileNotFoundError:
            pass
