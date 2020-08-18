import React from "react";
import { css } from "styled-components";
import Form from "./form/index";

const HeadingStyle = css`
  text-align: center;
  font-size: 3rem;
`;

const Contact = () => {
  return (
    <>
      <h1 css={HeadingStyle}>Contact</h1>
      <Form />
    </>
  );
};

export default Contact;
