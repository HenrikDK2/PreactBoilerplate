import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
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

const Image = ({ src, alt, style, href, to, title, altLink, children }) => {
  if (to) {
    return (
      <Link css={style} to={to} title={title} alt={altLink}>
        <Container>
          <Img src={src} alt={alt ? alt : "Image"} onDragStart={(e) => e.preventDefault()} />
        </Container>
      </Link>
    );
  } else if (href) {
    return (
      <A css={style} href={href} title={title} alt={altLink}>
        <Container>
          <Img src={src} alt={alt ? alt : "Image"} onDragStart={(e) => e.preventDefault()} />
        </Container>
      </A>
    );
  } else {
    return (
      <Container css={style} title={title}>
        {children}
        <Img src={src} alt={alt ? alt : "Image"} onDragStart={(e) => e.preventDefault()} />
      </Container>
    );
  }
};

export default Image;
