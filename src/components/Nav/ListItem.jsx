import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IsMenuOpenState } from "../../Store.jsx";

const Item = styled.li`
  text-align: center;
  margin: 1rem 0;
  padding: 0 1rem;
  white-space: pre;
  text-align: center;
  list-style: none;
`;

const underline = css`
  &::after {
    content: "";
    transition: all 0.3s;
    width: 80%;
    background: var(--primary);
    height: 4px;
    border-radius: 50%;
    box-shadow: inset 0 0 3px 0 #000;
    position: absolute;
    bottom: -10px;
    transform: translateX(-50%);
    left: 50%;
  }
`;
const underlineHover = css`
  ${underline}
  @media(min-width:1100px) {
    &::after {
      width: 0;
    }
    &:hover {
      &::after {
        width: 80%;
      }
    }
  }
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: var(--text);
  text-transform: uppercase;
  position: relative;
  font-size: 2rem;
  ${underlineHover}

  @media(min-width: 1100px) {
    font-size: 1.25rem;
  }
`;

const ListItem = ({ siteName, url }) => {
  // eslint-disable-next-line
  const [isMenuOpen, setIsMenuOpenState] = useRecoilState(IsMenuOpenState);
  return (
    <Item>
      <ItemLink to={url} onClick={() => setIsMenuOpenState(false)}>
        {siteName}
      </ItemLink>
    </Item>
  );
};

export default ListItem;
