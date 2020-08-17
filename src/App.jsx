/** @jsx jsx */
import React from "react";
import { css, jsx, Global } from "@emotion/core";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import Pages from "./pages/Pages.jsx";

const GlobalStyle = css`
  body {
    background: #000;
    color: #fff;
  }
`;

const App = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RecoilRoot>
        <Pages />
      </RecoilRoot>
    </>
  );
};

render(<App />, document.querySelector("#root"));
