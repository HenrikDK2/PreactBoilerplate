import React from "react";
import { css } from "styled-components";
import Carousel from "../../components/FlickityCarousel";
import ThemeButton from "../../components/ThemeButton";

const HeadingStyle = css`
  text-align: center;
  font-size: 3rem;
`;

const Index = () => {
  return (
    <>
      <h1 css={HeadingStyle}>Forside</h1>
      <ThemeButton />
      <Carousel />
    </>
  );
};

export default Index;
