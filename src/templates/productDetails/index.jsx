import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";
import { myFetch } from "../../utils";
import Image from "../../components/Image";
import ImageForm from "./ImageForm";
import Loader from "../../components/Loader";
import AdminText from "./AdminText";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AdminModeState, AddErrorSelector } from "../../Store";

const Article = styled.article`
  max-width: 1000px;
  padding: 2rem;
  margin: 0 auto;
  p {
    word-break: break-word;
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
`;

const imageStyleAdmin = css`
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
  const admin = useRecoilValue(AdminModeState);
  const addError = useSetRecoilState(AddErrorSelector);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await myFetch("posts/" + id);
        if (!data) throw "An error occurred. Please try again later!";
        setProduct(data);
      } catch (error) {
        addError(error);
      }
    })();
  }, []);

  if (!product) return <Loader />;

  return (
    <Article>
      <Image
        ref={imageRef}
        style={[imageStyle, admin && imageStyleAdmin]}
        src="/placeholder-image.jpg"
        alt="placeholder"
      >
        {admin && <ImageForm imageRef={imageRef} />}
      </Image>
      {admin ? (
        <>
          <AdminText content={product.title} tag="h1" />
          <AdminText content={product.body} tag="p" />
        </>
      ) : (
        <>
          <h1>{product.title}</h1>
          <p>{product.body}</p>
        </>
      )}
    </Article>
  );
};

export default productDetails;
