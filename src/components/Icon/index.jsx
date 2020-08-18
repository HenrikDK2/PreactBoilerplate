import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const A = styled.a`
  text-decoration: none;
`;

const Icon = ({ icon, style, href, to, title, alt, onClick }) => {
  if (href) {
    return (
      <A onClick={onClick} href={href} title={title} alt={alt} css={style}>
        <FontAwesomeIcon icon={icon} />
      </A>
    );
  } else if (to) {
    return (
      <A onClick={onClick} to={to} title={title} alt={alt} css={style}>
        <FontAwesomeIcon icon={icon} />
      </A>
    );
  } else {
    return <FontAwesomeIcon onClick={onClick} title={title} css={style} icon={icon} />;
  }
};

export default Icon;
