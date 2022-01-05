TYPESCRIPT_FILE_NAME="tsconfig.json"
PREVIEW_FILE_NAME="preview.tsx"
MAIN_FILE_NAME="main.ts"
CACHE_DIR_NAME=$(echo -n $(pwd) | md5sum | cut -d' ' -f1)
CACHE_STORY_PATH="$MJW_CACHE_PATH/$CACHE_DIR_NAME/story"
CACHE_STORY_PREVIEW_PATH=$CACHE_STORY_PATH/$PREVIEW_FILE_NAME
CACHE_STORY_MAIN_PATH=$CACHE_STORY_PATH/$MAIN_FILE_NAME
CACHE_STORY_TYPESCRIPT_PATH=$CACHE_STORY_PATH/$TYPESCRIPT_FILE_NAME
STORY_BIN_PATH=$MJW_NODE_BIN_PATH/storybook-server
DEST_CONFIG_DIR_NAME=".storybook"
DEST_STORY_CONFIG_PATH="$(pwd)/$DEST_CONFIG_DIR_NAME"

init() {
  local dest_story_main_content='const configCallback = (args: any) => args;'

  mkdir -p $CACHE_STORY_PATH

  if [[ -f $DEST_STORY_CONFIG_PATH/$MAIN_FILE_NAME ]]; then
    dest_story_main_content="import configCallback from '$DEST_STORY_CONFIG_PATH/$MAIN_FILE_NAME'"
    echo "INFO:: Custom 'main.ts' file founded at '$DEST_STORY_CONFIG_PATH'"
  fi

cat <<- EOF > $CACHE_STORY_PREVIEW_PATH
import type { Parameters } from "@storybook/react";

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
EOF

cat <<- EOF > $CACHE_STORY_MAIN_PATH
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import type { StorybookConfig } from "@storybook/react/types";

$dest_story_main_content

const config: StorybookConfig = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "$(pwd)/stories/**/*.stories.mdx",
    "$(pwd)/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...((config.resolve.plugins || []) as any),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }

    return config;
  },
};

module.exports = configCallback(config);
EOF

cat <<- EOF > $CACHE_STORY_TYPESCRIPT_PATH
{
  "extends": "@morajlab/npm.config.typescript/ts-node.json"
}
EOF

  echo "MJW story initialized successfully."
}

story() {
  if [[ ! -f $CACHE_STORY_PREVIEW_PATH ]] ||
    [[ ! -f $CACHE_STORY_TYPESCRIPT_PATH ]] ||
    [[ ! -f $CACHE_STORY_MAIN_PATH ]]; then
    init
  fi
}
