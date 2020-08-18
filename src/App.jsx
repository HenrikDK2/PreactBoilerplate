import React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import Pages from "./pages/Pages.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: #fff;
    padding: 0;
    background: #000;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <Pages />
      </RecoilRoot>
    </>
  );
};

render(<App />, document.querySelector("#root"));
