import React from "react";
import { ThemeState } from "../../Store";
import styled from "styled-components";
import { useRecoilState } from "recoil";

const Button = styled.button``;

const ThemeButton = () => {
  const [theme, setTheme] = useRecoilState(ThemeState);

  const updateIndex = () => {
    let index = 1 + theme.index;
    if (index > theme.themes.length) index = 0;
    setTheme({ ...theme, index });
    localStorage.setItem("ThemeIndex", `${index}`);
  };

  return <Button onClick={() => updateIndex()}>Skift</Button>;
};

export default ThemeButton;
