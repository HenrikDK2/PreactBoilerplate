import React from "react";
import styled, { css } from "styled-components";

const HeadingStyle = css`
  text-align: center;
  font-size: 3rem;
`;

const GalleryGrid = styled.section``;

const Gallery = () => {
  return (
    <>
      <h1 css={HeadingStyle}>Gallery</h1>
      <GalleryGrid></GalleryGrid>
    </>
  );
};

export default Gallery;
