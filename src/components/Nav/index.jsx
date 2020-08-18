import React from "react";
import styled, { css } from "styled-components";
import List from "./List";
import { useRecoilState } from "recoil";
import { IsMenuOpenState } from "../../Store";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
Modal.setAppElement("#root");

const Nav = styled.nav`
  padding: 2rem 1rem;
  background: #fff;
  box-sizing: border-box;
  user-select: none;
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
  top: 0;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
`;

const Button = styled(FontAwesomeIcon)`
  margin-left: auto;
  cursor: pointer;
  font-size: 2rem;
  @media (min-width: 1100px) {
    display: none;
  }
`;

const PhoneNavigation = styled(Modal)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: #fff;
  background: #000;
`;

const ExitButton = styled(FontAwesomeIcon)`
  color: red;
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 4rem;
  cursor: pointer;
`;

const desktopCss = css`
  display: none;
  @media (min-width: 1100px) {
    display: flex;
    width: 100%;
    justify-content: Center;
    padding: 0;
  }
`;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(IsMenuOpenState);
  return (
    <>
      <Nav>
        <Button onClick={() => setIsMenuOpen(true)} icon={["fa", "bars"]} />
        <List style={desktopCss} />
      </Nav>

      <PhoneNavigation isOpen={isMenuOpen && true} onRequestClose={() => setIsMenuOpen(false)}>
        <ExitButton onClick={() => setIsMenuOpen(false)} icon={["fa", "times"]} />
        <List />
      </PhoneNavigation>
    </>
  );
};

export default Navigation;
