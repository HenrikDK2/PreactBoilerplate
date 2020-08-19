import { createGlobalStyle } from "styled-components";

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

  body {
    margin: 0;
    padding: 0;
  }

  .ReactModal__Overlay {
    z-index:999;
  }

  [data-theme="default"]{
    --red: #ff2a70;
  }
  
  [data-theme="fun"]{
    --red: #00ff00;
  }

  [data-theme="cold"]{
    --red: #0000ff;
  }
`;

export default GlobalStyle;
