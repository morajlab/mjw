#!/usr/bin/env node

import { createElement } from "react";
import { render } from "ink";
import meow from "meow";
import { App } from "./ui.mjs";

const cli = meow(
  `
	Usage
	  $ cli

	Options
		--name  Your name

	Examples
	  $ cli --name=Jane
	  Hello, Jane
`,
  {
    importMeta: import.meta,
    flags: {
      name: {
        type: "string",
      },
    },
  }
);

render(createElement(App, { name: cli.flags.name }));
