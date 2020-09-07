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

  @keyframes SlideInX{
    0%{
      transform:translateX(-500px);
      opacity:0;
    }

    100%{
      transform:translateX(0);
      opacity:1;

    }
  }


  body {
    margin: 0;
    padding: 0;
    color: var(--primary);

  }

  .ReactModal__Overlay {
    z-index:999;
  }
  :root{
    --content: 1000px;
    --primary: #ff2a70;
  }

  [data-theme="fun"]{
    --primary: #00ff00;
  }

  [data-theme="cold"]{
    --primary: #0000ff;
  }
`;

export default GlobalStyle;
