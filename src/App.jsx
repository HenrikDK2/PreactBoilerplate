import React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import Pages from "./pages/Pages.jsx";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

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
