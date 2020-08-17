import React from "react";
import { render } from "react-dom";

const App = () => {
  return <h2>Loaded</h2>;
};

render(<App />, document.querySelector("#root"));
