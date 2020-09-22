import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  --border: 1.1em solid rgba(200, 200, 200, 0.2);
  margin: 60px auto;
  border-radius: 50%;
  width: 10em;
  height: 10em;
  border-top: var(--border);
  border-right: var(--border);
  border-bottom: var(--border);
  border-left: 1.1em solid var(--primary);
  animation: load8 1.1s infinite linear;
`;

const LoaderComponent = () => {
  return <Loader />;
};

export default LoaderComponent;
