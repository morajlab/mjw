import { createElement } from "react";
import { Text } from "ink";

export const App = ({ name = "Stranger" }) =>
  createElement(Text, null, createElement(Text, { color: "green" }, name));

export default App;
