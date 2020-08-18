import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Figure = styled.figure`
  user-select: none;
  width: 50px;
  height: 50px;
  margin: 0;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const A = styled.a`
  text-decoration: none;
`;

const Image = ({ src, alt, style, href, to, title, altLink }) => {
  if (to) {
    return (
      <Link css={style} to={to} title={title} alt={altLink}>
        <Figure>
          <Img src={src} alt={alt ? alt : "Image"} onDragStart={(e) => e.preventDefault()} />
        </Figure>
      </Link>
    );
  } else if (href) {
    return (
      <A css={style} href={href} title={title} alt={altLink}>
        <Figure>
          <Img src={src} alt={alt ? alt : "Image"} onDragStart={(e) => e.preventDefault()} />
        </Figure>
      </A>
    );
  } else {
    return (
      <Figure css={style} title={title}>
        <Img src={src} alt={alt ? alt : "Image"} onDragStart={(e) => e.preventDefault()} />
      </Figure>
    );
  }
};

export default Image;
