import hashlib
import os
import shutil
from .path import getCachePath


class Cache:
    def __init__(self, key):
        path = key if os.path.isabs(key) else os.path.join(os.getcwd(), key)
        path = os.path.abspath(path)
        self.hash = hashlib.md5(path.encode("utf-8")).hexdigest()

    def getPath(self, *path):
        return getCachePath(self.hash, *path)

    def create(self, *path):
        os.makedirs(self.getPath(*path), exist_ok=True)

    def clean(self, *path):
        try:
            shutil.rmtree(self.getPath(*path))
        except FileNotFoundError:
            pass

    @staticmethod
    def cleanAll():
        try:
            shutil.rmtree(getCachePath())
        except FileNotFoundError:
            pass
