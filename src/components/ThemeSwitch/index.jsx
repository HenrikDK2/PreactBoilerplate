import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button``;
const html = document.documentElement;
const themes = ["default", "fun", "cold"];

const index = () => {
  const [index, setIndex] = useState(
    localStorage.getItem("i") ? parseInt(localStorage.getItem("i")) : 0
  );

  const updateIndex = () => {
    let i = 1 + index;
    if (i > themes.length - 1) i = 0;
    setIndex(i);
    localStorage.setItem("i", `${i}`);
  };

  useEffect(() => {
    html.setAttribute("data-theme", themes[index]);
  }, [index]);

  return <Button onClick={() => updateIndex()}>Skift tema</Button>;
};

export default index;
