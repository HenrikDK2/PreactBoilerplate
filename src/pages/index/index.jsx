/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const HeadingStyle = css`
  text-align: center;
  font-size: 3rem;
`;

const Index = () => {
  return <h1 css={HeadingStyle}>Loaded</h1>;
};

export default Index;
