import { ce } from "@morajlab/react-hyper";
import { Text } from "ink";

export const App = ({ name = "Stranger" }) =>
  ce(Text, null, ce(Text, { color: "green" }, name));

export default App;
