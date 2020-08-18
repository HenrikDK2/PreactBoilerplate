import React from "react";
import { css } from "styled-components";

const HeadingStyle = css`
  text-align: center;
  font-size: 3rem;
`;

const Index = () => {
  return <h1 css={HeadingStyle}>Forside</h1>;
};

export default Index;
