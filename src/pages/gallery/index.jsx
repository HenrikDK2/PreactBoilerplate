import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Fetch from "../../Fetch";
import Img from "../../components/Image";
import { GalleryPhotosState } from "../../Store";
import { useRecoilState } from "recoil";
import GalleryModal from "./GalleryModal";

const HeadingStyle = css`
  text-align: center;
  font-size: 3rem;
`;

const GallerySection = styled.section``;
const ContentGird = styled.ul`
  margin: 0 auto;
  list-style: none;
  display: grid;
  padding: 0;
  max-width: var(--content);
  place-content: center;

  & li:nth-of-type(1) {
    animation: SlideInX 0.5s;
  }

  & li:nth-of-type(2) {
    animation: SlideInX 0.6s;
  }
  & li:nth-of-type(3) {
    animation: SlideInX 0.7s;
  }
  & li:nth-of-type(4) {
    animation: SlideInX 0.8s;
  }
  & li:nth-of-type(5) {
    animation: SlideInX 0.9s;
  }

  @media (min-width: 500px) {
    display: grid;
    grid-gap: 10px;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    & > li:nth-of-type(1) {
      grid-column: span 1;
    }
    & > li:nth-of-type(2) {
      grid-column: span 1;
    }
    & > li:nth-of-type(3) {
      grid-column: span 1;
    }
    & > li:nth-of-type(4) {
      grid-column: span 2;
    }
    & > li:nth-of-type(5) {
      grid-column: span 1;
    }
  }
`;

const GridItem = styled.li`
  cursor: pointer;
  & > figure {
    width: initial;
    height: initial;
  }
`;

const Gallery = () => {
  const [gallery, setGallery] = useRecoilState(GalleryPhotosState);

  useEffect(() => {
    (async () => {
      const data = await Fetch("photos").then((e) => e.splice(0, 6));
      setGallery({ ...gallery, data });
      console.log(data);
    })();
  }, []);
  return (
    <>
      <h1 css={HeadingStyle}>Gallery</h1>
      <GallerySection>
        <ContentGird>
          {gallery && gallery.data
            ? gallery.data.map((image, i) => {
                return (
                  <GridItem
                    key={i}
                    onClick={(e) => setGallery({ ...gallery, isOpen: true, index: i })}
                  >
                    <Img src={image.url} />
                  </GridItem>
                );
              })
            : null}
        </ContentGird>
      </GallerySection>
      <GalleryModal />
    </>
  );
};

export default Gallery;
