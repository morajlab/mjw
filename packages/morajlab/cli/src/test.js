import { ce } from "@morajlab/react-hyper";
import chalk from "chalk";
import test from "ava";
import { render } from "ink-testing-library";
import App from "./ui";

test("greet unknown user", (t) => {
  const { lastFrame } = render(ce(App));

  t.is(lastFrame(), chalk`Hello, {green Stranger}`);
});

test("greet user with a name", (t) => {
  const { lastFrame } = render(ce(App, { name: "Jane" }));

  t.is(lastFrame(), chalk`Hello, {green Jane}`);
});
