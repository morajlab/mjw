import os
from cement import Controller, ex
from ..core.cache import Cache
from ..core.path import getTemplatePath, getCachePath


class Story(Controller):
    class Meta:
        label = "story"
        stacked_on = "base"
        stacked_type = "embedded"

    @ex(help="Story command help")
    def story(self):
        """Story docstring"""

        data = {}
        cwd = os.getcwd()
        dest_story_path = os.path.join(cwd, ".story")

        if os.path.exists(os.path.join(dest_story_path, "main.ts")):
            data = {
                "customConfigCallback": "import configCallback from '%s'"
                % os.path.splitext(os.path.join(dest_story_path, "main.ts"))[0]
            }

        cache = Cache(key=cwd)
        cache.create(".story")

        self.app.mjw.template.renderTo(
            getTemplatePath("story"), cache.getPath(".story"), data, force=True
        )
