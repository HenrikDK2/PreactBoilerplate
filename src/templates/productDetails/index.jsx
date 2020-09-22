import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";
import { myFetch } from "../../utils";
import Image from "../../components/Image";
import ImageForm from "./ImageForm";

const Section = styled.section`
  max-width: 1000px;
  padding: 2rem 0;
  margin: 0 auto;
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

const Container = styled.div`
  position: relative;
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

  if (!product) return;

  return (
    <Section>
      <Image ref={imageRef} style={imageStyle} src="/placeholder-image.jpg" alt="placeholder">
        <ImageForm imageRef={imageRef} />
      </Image>
      <Container>
        <h1>{product.title}</h1>
      </Container>
      <p>{product.body}</p>
    </Section>
  );
};

export default productDetails;
