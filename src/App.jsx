import React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import Pages from "./pages/Pages.jsx";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  @keyframes slideTopIn {
    0%{
      transform:translateY(-300px);
    }

    100%{
      transform:translateY(0);
    }
  }

  @keyframes slideTopOut {
    0%{
      transform:translateY(0);
    }

    100%{
      transform:translateY(-300px);
    }
  }

  @keyframes slideBottomIn {
    0%{
      transform:translateY(300px);
    }

    100%{
      transform:translateY(0);
    }
  }

  @keyframes slideBottomOut {
    0%{
      transform:translateY(0);
    }

    100%{
      transform:translateY(300px);
    }
  }


  :root{
    --bgColor: #030203;
    --red: #ff2a70;
  }

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
