import React from "react";
import styled from "styled-components";
import Flickity from "react-flickity-component";
import Modal from "react-modal";
import { GalleryPhotosState } from "../../Store";
import { useRecoilState } from "recoil";
import Image from "../../components/Image";

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

const GalleryModal = () => {
  const [gallery, setGallery] = useRecoilState(GalleryPhotosState);

  if (!gallery.data) return null;

  return (
    <ModalContainer isOpen={gallery.isOpen}>
      <Flickity>
        {gallery.data.map((data, i) => {
          return (
            <Slide key={i}>
              <Image src={data.url} />
            </Slide>
          );
        })}
      </Flickity>
    </ModalContainer>
  );
};

export default GalleryModal;
