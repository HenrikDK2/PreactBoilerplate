import React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import Pages from "./pages/Pages.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <RecoilRoot>
        <Pages />
      </RecoilRoot>
    </Router>
  );
};

render(<App />, document.querySelector("#root"));
