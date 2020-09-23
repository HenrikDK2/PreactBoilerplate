import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";
import { myFetch } from "../../utils";
import Image from "../../components/Image";
import ImageForm from "./ImageForm";
import Loader from "../../components/Loader";
import AdminText from "./AdminText";

const Section = styled.section`
  max-width: 1000px;
  padding: 2rem;
  margin: 0 auto;
  h1,
  p {
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
  }
`;

const imageStyle = css`
  width: 100%;
  height: 500px;
  position: relative;
  img {
    transition: filter 0.5s;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: Cover;
  }

  &:hover {
    button {
      opacity: 1;
      pointer-events: all;
    }
    img {
      filter: brightness(30%);
    }
  }
`;

const productDetails = () => {
  const imageRef = useRef(null);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await myFetch("posts/" + id);
      setProduct(data);
    })();
  }, []);

  if (!product) return <Loader />;

  return (
    <Section>
      <Image ref={imageRef} style={imageStyle} src="/placeholder-image.jpg" alt="placeholder">
        <ImageForm imageRef={imageRef} />
      </Image>
      <AdminText content={product.title} tag="h1" />
      <AdminText content={product.body} tag="p" />
    </Section>
  );
};

export default productDetails;
