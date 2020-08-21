import React, { useState, useLayoutEffect, useEffect } from "react";
import styled, { css } from "styled-components";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import Icon from "../Icon";
import Image from "../Image";

const animateCss = css`
  border: 2px solid var(--primary);

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
  transition: border 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-right: 50px solid transparent;
    border-left: 50px solid var(--primary);
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
    border-bottom: 50px solid var(--primary);
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
    background: var(--primary);
  }
  .flickity-slider {
    & > .is-selected {
      opacity: 1;
    }
  }
`;

const imageCss = css`
  & {
    height: 100%;
    width: 100%;
  }
  & > img {
    transition: filter 0.3s;

    object-fit: cover;
  }
`;

const iconRightCss = css`
  font-size: 3rem;
  position: absolute;
  right: -150px;
  cursor: pointer;
  padding: 1rem;
  border: 2px solid grey;
  top: 50%;
  transform: translateY(-100px);
  @media (max-width: 1230px) {
    position: static;
    margin-top: 200px;
  }
`;

const iconLeftCss = css`
  ${iconRightCss}
  left:-150px;
`;

const Article = styled.article`
  position: relative;
  max-width: 840px;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 10px;
`;

function FlickityCarousel() {
  const [flickityRef, setFlickityRef] = useState(null);
  const [flickityOptions, setFlickityOptions] = useState({
    draggable: false,
    prevNextButtons: false,
    accessibility: false,
    wrapAround: true,
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

  return (
    <>
      <Article>
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
        <ButtonContainer>
          <Icon onClick={() => flickityRef.previous()} style={iconLeftCss} icon={"arrow-left"} />
          <Icon onClick={() => flickityRef.next()} style={iconRightCss} icon={"arrow-right"} />
        </ButtonContainer>
      </Article>
    </>
  );
}

export default FlickityCarousel;
