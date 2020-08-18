import React, { useState, useLayoutEffect, useEffect } from "react";
import styled, { css } from "styled-components";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import Image from "../Image";

const animateCss = css`
  border: 2px solid var(--red);

  &::after {
    animation: slideTopIn 0.3s forwards;
  }

  & img {
    filter: brightness(50%);
  }

  &::before {
    animation: slideBottomIn 0.3s forwards;
  }
`;

const Container = styled.article`
  border: 2px solid transparent;
  height: 400px;
  width: 50%;
  max-width: 400px;
  user-select: none;
  box-sizing: border-box;
  margin: 0 20px;
  position: relative;
  opacity: 1;
  transition: all 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-right: 50px solid transparent;
    border-left: 50px solid var(--red);
    border-bottom: 50px solid transparent;
    animation: slideTopOut 0.3s forwards;
    z-index: 5;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    animation: slideBottomOut 0.3s forwards;
    border-top: 50px solid transparent;
    border-left: 50px solid transparent;
    border-bottom: 50px solid var(--red);
    z-index: 5;
  }

  &:hover {
    ${animateCss}
  }

  @media (max-width: 800px) {
    &:focus {
      ${animateCss}
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Carousel = styled(Flickity)`
  margin: 0 auto;
  max-width: 850px;
  .flickity-page-dots {
    position: static;
    margin-top: 50px;
  }
  .flickity-page-dots .dot {
    border-radius: 0;
    width: 2rem;
    height: 2rem;
  }
  .flickity-page-dots .dot.is-selected {
    background: var(--red);
  }
  .flickity-slider {
    & > .is-selected {
      opacity: 1;
    }
  }
`;

const imageCss = css`
  & figure {
    height: 100%;
    width: 100%;
  }
  & img {
    object-fit: cover;
  }
`;

const Button = styled.button`
  height: 50px;
  width: 50px;
`;

function FlickityCarousel() {
  const [flickityRef, setFlickityRef] = useState(null);
  const [flickityOptions, setFlickityOptions] = useState({
    draggable: false,
    prevNextButtons: false,
    accessibility: false,
    percentPosition: true,
    groupCells: window.innerWidth < 500 ? 1 : 2,
  });

  const resizeFunc = () => {
    if (window.innerWidth < 500) {
      const options = { ...flickityOptions, groupCells: 1 };
      if (flickityOptions === options) return;
      setFlickityOptions(options);
    } else {
      const options = { ...flickityOptions, groupCells: 2 };
      if (flickityOptions === options) return;
      setFlickityOptions(options);
    }
  };

  useLayoutEffect(() => {
    if (flickityRef) {
      flickityRef.on("resize", resizeFunc);

      return () => {
        flickityRef.off("resize", resizeFunc);
      };
    }
  });

  useEffect(() => {
    if (flickityRef) flickityRef.next();
  }, [flickityRef]);

  return (
    <section>
      <Carousel
        key={flickityOptions ? flickityOptions.groupCells : 3}
        options={flickityOptions}
        flickityRef={(e) => setFlickityRef(e)}
      >
        {Array.from(new Array(7).keys()).map((_, i) => {
          return (
            <Container tabIndex={1} key={i}>
              <Image
                style={imageCss}
                src="https://raw.githubusercontent.com/HenrikDK2/night-club/master/src/assets/content-img/event-thumb1.jpg"
              />
            </Container>
          );
        })}
      </Carousel>
      <Button
        onClick={(e) => {
          flickityRef.previous();
        }}
      >
        Previous
      </Button>
      <Button
        onClick={(e) => {
          flickityRef.next();
        }}
      >
        Next
      </Button>
    </section>
  );
}

export default FlickityCarousel;
