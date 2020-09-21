import React from "react";
import styled, { css } from "styled-components";

const ErrorMsg = styled.span`
  width: max-content;
  display: block;
  min-height: 25px;
  color: #ae5961;
`;

const Label = styled.label`
  display: block;
`;

const FormInput = ({
  style,
  aria,
  type,
  textarea,
  name,
  placeholder,
  disabled,
  register,
  errors,
  enableBorder = true,
}) => {
  const error = errors[name] && errors[name];
  const Border = css`
    border: 1px solid red !important;
  `;

  if (textarea) {
    return (
      <Label css={style} aria-label={aria ? aria : name + " Inputfield"} htmlFor={name}>
        <textarea
          name={name}
          css={enableBorder && error ? Border : null}
          placeholder={placeholder && placeholder}
          type={type ? type : "text"}
          disabled={disabled}
          ref={register}
        />
        {<ErrorMsg>{error && error.message}</ErrorMsg>}
      </Label>
    );
  }

  return (
    <Label css={style} aria-label={aria ? aria : name + " Inputfield"} htmlFor={name}>
      <input
        name={name}
        css={enableBorder && error ? Border : null}
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
