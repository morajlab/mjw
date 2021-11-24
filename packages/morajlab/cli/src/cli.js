#!/usr/bin/env node

import { ce } from "@morajlab/react-hyper";
import { render } from "ink";
import meow from "meow";
import { App } from "./ui.js";

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

render(ce(App, { name: cli.flags.name }));
