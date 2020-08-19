import React from "react";
import styled, { css } from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 0 1rem;
  box-sizing: Border-box;
  font-size: 1rem;
  font-weight: 500;
  height: 40px;
  margin: 0;
  background: transparent;
  border: 1px solid #343434;
`;

const ErrorMsg = styled.span`
  width: max-content;
  display: block;
  min-height: 25px;
  color: #ae5961;
`;

const Label = styled.label`
  display: block;
`;

const FormInput = ({ style, aria, type, name, placeholder, disabled, register, errors }) => {
  const error = errors[name] && errors[name];
  const Border = css`
    border: 1px solid ${error ? "red" : "null"};
  `;

  return (
    <Label css={style} aria-label={aria ? aria : name + " Inputfield"} htmlFor={name}>
      <Input
        name={name}
        css={Border}
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        disabled={disabled}
        ref={register}
      />
      {<ErrorMsg>{error && error.message}</ErrorMsg>}
    </Label>
  );
};

export default FormInput;
