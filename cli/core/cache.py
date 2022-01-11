import hashlib
import os
import shutil
from .path import getRoot


class CacheNameError(Exception):
    """Cache name error"""

    pass


class Cache:
    BASE_DIR_NAME = ".cache"

    def __init__(self, name=None):
        self.cache_path = os.path.join(getRoot(), self.BASE_DIR_NAME)

        if name is not None:
            self.hash = hashlib.md5(name.encode("utf-8")).hexdigest()
            self.target_cache_path = os.path.join(self.cache_path, self.hash)

    def create(self):
        try:
            os.makedirs(self.target_cache_path, exist_ok=True)
        except AttributeError:
            raise CacheNameError("parameter `name` is not defined") from None

    def clear(self):
        try:
            shutil.rmtree(self.target_cache_path)
        except AttributeError:
            raise CacheNameError("parameter `name` is not defined") from None
        except FileNotFoundError:
            pass

    def clear_all(self):
        try:
            shutil.rmtree(self.cache_path)
        except FileNotFoundError:
            pass
