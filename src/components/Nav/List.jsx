import React from "react";
import styled from "styled-components";
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
      <ListItem siteName="Products" url="/products" />
      <ListItem siteName="Gallery" url="/gallery?id=test&name=Henrik" />
      <ListItem siteName="Contact Us" url="/contact" />
    </UlList>
  );
};

export default List;
