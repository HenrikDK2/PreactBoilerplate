import React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import Pages from "./pages/Pages.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Modal from "react-modal";
import { faArrowLeft, faArrowRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Themes from "./components/Themes";
Modal.setAppElement("#root");
library.add(faArrowLeft, faArrowRight, faBars, faTimes);

const App = () => {
  return (
    <>
      <Router>
        <RecoilRoot>
          <GlobalStyle />
          <Themes />
          <Pages />
        </RecoilRoot>
      </Router>
    </>
  );
};

render(<App />, document.querySelector("#root"));
