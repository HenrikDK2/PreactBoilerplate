import React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import Pages from "./pages/Pages.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faArrowLeft, faArrowRight);

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
