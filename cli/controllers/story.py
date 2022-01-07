import os
import hashlib
from cement import Controller, ex

# TYPESCRIPT_FILE_NAME = "tsconfig.json"
# PREVIEW_FILE_NAME = "preview.tsx"
# MAIN_FILE_NAME = "main.ts"
# CACHE_DIR_NAME=$(echo -n $(pwd) | md5sum | cut -d' ' -f1)
# CACHE_STORY_PATH="$MJW_CACHE_PATH/$CACHE_DIR_NAME/story"
# CACHE_STORY_PREVIEW_PATH=$CACHE_STORY_PATH/$PREVIEW_FILE_NAME
# CACHE_STORY_MAIN_PATH=$CACHE_STORY_PATH/$MAIN_FILE_NAME
# CACHE_STORY_TYPESCRIPT_PATH=$CACHE_STORY_PATH/$TYPESCRIPT_FILE_NAME
# STORY_BIN_PATH=$MJW_NODE_BIN_PATH/storybook-server
# DEST_CONFIG_DIR_NAME=".storybook"
# DEST_STORY_CONFIG_PATH="$(pwd)/$DEST_CONFIG_DIR_NAME"


class Story(Controller):
    class Meta:
        label = "story"
        stacked_on = "base"
        stacked_type = "embedded"

    @ex(help="Story command help")
    def story(self):
        """Story docstring"""

        cwd = os.cwd()

        self.app.render(
            {
                "customConfigCallback": "%s"
                % "import configCallback from '$DEST_STORY_CONFIG_PATH/$MAIN_FILE_NAME'"
            },
            "story/main.ts.jinja2",
        )

        print(hashlib.md5().hexdigest())
