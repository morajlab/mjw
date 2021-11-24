#!/usr/bin/env node

import { ce } from "@morajlab/react-hyper";
import { render } from "ink";
import meow from "meow";
import { App } from "./ui.js";

const cli = meow(
  `
	Usage: mj <command> [<args>]

	Options:
    -h, --help      Shows help
    -v, --version   Shows version

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

console.log(cli);

render(ce(App, { name: cli.flags.name }));
