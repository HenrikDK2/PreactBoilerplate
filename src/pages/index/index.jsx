import React from "react";
import { css } from "styled-components";
import Carousel from "../../components/FlickityCarousel";

const HeadingStyle = css`
  text-align: center;
  font-size: 3rem;
`;

const Index = () => {
  return (
    <>
      <h1 css={HeadingStyle}>Forside</h1> <Carousel />
    </>
  );
};

export default Index;
