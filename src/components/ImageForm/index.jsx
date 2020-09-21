import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Form = styled.form`
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & ~ img {
    filter: brightness(30%);
  }
`;

const ErrorMsg = styled.span`
  width: max-content;
  display: block;
  margin-top: 0.5rem;
  min-height: 25px;
  color: #ff0018; ;
`;
const Input = styled.input``;
const Button = styled.button`
  transition: 0.5s opacity;
  opacity: 0;
  pointer-events: none;
  padding: 0.5rem 2rem;
  font-size: 2rem;
  background: #3dada7;
  color: #fff;
  border: none;
  border-radius: 4px;
  z-index: 1;
  cursor: pointer;
  width: max-content;
`;

const Cancel = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 4px;
  font-weight: 900;
  cursor: pointer;
  background: #3dada7;
  color: #fff;
  width: max-content;
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  z-index: 1;
`;

const Submit = styled(Cancel)`
  left: initial;
  right: 1rem;
`;

const ImageForm = () => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const imageFile = data.image[0];
    console.log(imageFile);
    setShow(false);
  };

  if (!show)
    return (
      <Button
        className="center"
        onClick={() => {
          setShow(true);
        }}
      >
        Edit Image
      </Button>
    );
  console.log(errors);
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="image"
          type="file"
          ref={register({
            required: "This field is required",
          })}
        />
        {<ErrorMsg>{errors && errors.image && errors.image.message}</ErrorMsg>}
        <Submit>Submit</Submit>
      </Form>
      <Cancel onClick={() => setShow(false)}>Cancel</Cancel>
    </>
  );
};

export default ImageForm;
