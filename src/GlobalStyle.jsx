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

  @keyframes ErrorSlideAnim{
    0%{
      transform:translateX(100px);
      opacity:0;
    }

    20% {
      transform:translateX(0);
      opacity:1;
    }

    80%{
      transform:translateX(0);
      opacity:1;
    }

    100% {
      transform:translateX(100px);
      opacity:0;
    }
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

  body {
    margin: 0;
    padding: 0;
    color: var(--primary);
    font-family: "roboto";
  }

  input, textarea {
    font-family: "roboto";

  }

  .center{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .ReactModal__Body--open{
    overflow:hidden;
  }

  .ReactModal__Overlay {
    z-index:999;
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;

export default GlobalStyle;
