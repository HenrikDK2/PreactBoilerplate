import React from "react";
import styled, { css } from "styled-components";
import ListItem from "./ListItem";

const UlList = styled.ul`
  padding: 50px;
  margin: 0;
  box-sizing: border-box;
`;
const List = ({ style }) => {
  return (
    <UlList css={style}>
      <ListItem siteName="Home" url="/" />
      <ListItem siteName="Book" url="/book" />
      <ListItem siteName="About Us" url="/" />
      <ListItem siteName="Blog" url="/blog" />
      <ListItem siteName="Events" url="/" />
      <ListItem siteName="Gallery" url="/gallery" />
      <ListItem siteName="Book" url="/book" />
      <ListItem siteName="Contact Us" url="/contact" />
    </UlList>
  );
};

export default List;
