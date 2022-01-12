from cement import Controller, ex
from ..core.cache import Cache


class Cache(Controller):
    class Meta:
        label = "cache"
        stacked_on = "base"
        stacked_type = "embedded"

    @ex(help="Cache command help")
    def cache(self):
        """Cache docstring"""
        pass
