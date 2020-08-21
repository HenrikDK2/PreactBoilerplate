import React, { useState } from "react";
import styled, { css } from "styled-components";
import Flickity from "react-flickity-component";
import Modal from "react-modal";
import { GalleryPhotosState } from "../../Store";
import Image from "../../components/Image";
import { useRecoilState } from "recoil";
import Icon from "../../components/Icon";

const ModalContainer = styled(Modal)``;
const Slide = styled.article`
  width: 100%;
  height: 500px;
  & > figure {
    width: 100%;
    height: 100%;
    & > img {
      object-fit: cover;
    }
  }
`;

const Exit = ({ onClick }) => (
  <Icon
    style={css`
      font-size: 3rem;
      position: absolute;
      right: 1rem;
      cursor: pointer;
      top: 1rem;
    `}
    onClick={onClick}
    icon={["fa", "times"]}
  />
);

const Carousel = styled(Flickity)`
  max-width: 800px;
  margin: 0 auto;
`;

const GalleryModal = () => {
  const [carouselRef, setCarouselRef] = useState(null);
  const [gallery, setGallery] = useRecoilState(GalleryPhotosState);

  if (!gallery.data) return null;

  return (
    <ModalContainer isOpen={gallery.isOpen}>
      <Carousel flickityRef={(e) => setCarouselRef(e)} options={{ initialIndex: gallery.index }}>
        {gallery.data.map((data, i) => {
          return (
            <Slide key={i}>
              <Image src={data.url} />
            </Slide>
          );
        })}
      </Carousel>
      <Exit onClick={() => setGallery({ ...gallery, isOpen: false })} />
    </ModalContainer>
  );
};

export default GalleryModal;
