import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Fetch from "../../Fetch";
import Image from "../../components/Image";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { ProductFormModal } from "../../Store";
import { useForm } from "react-hook-form";
import Input from "../../components/FormInput";

const FormModal = styled(Modal)`
  width: 100%;
  height: 100%;
  display: Flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  max-width: 500px;
  width: 100%;
`;
const Button = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 4px;
  font-weight: 900;
  cursor: pointer;
  background: #3dada7;
  color: #fff;
  width: max-content;
  z-index: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const formInputStyle = css`
  background: #fff;
  width: 100%;
  background: #fff;
  font-family: "arial";
  box-sizing: border-box;
  padding: 0.8rem;
  font-size: 1.25rem;
  border: 1px solid;
`;

const inputStyle = css`
  input {
    &:focus {
      outline: none;
    }
    ${formInputStyle}
  }
`;

const textareaStyle = css`
  textarea {
    ${formInputStyle}
    padding: 1rem;
    min-height: 300px;
  }
`;

const Products = () => {
  const [showModal, setShowModal] = useRecoilState(ProductFormModal);
  const { register, handleSubmit, setError, errors } = useForm();
  const onSubmit = (data) => {
    if (data.image[0].type === "image/webp") {
      setError();
    }
  };

  return (
    <FormModal closeTimeoutMS={500} isOpen={showModal}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Image>
          <Input
            name="image"
            type="file"
            onChange={(e) => console.log(e)}
            enableBorder={false}
            register={register({
              required: "This field is required",
            })}
            errors={errors}
          />
        </Image>
        <Input
          name="Title"
          placeholder="Title"
          style={inputStyle}
          register={register({
            required: "This field is required",
            minLength: {
              value: 10,
              message: `Title need at least 10 characters`,
            },
            pattern: {
              value: /^[a-å A-Å_ ]*$/,
              message: "Title can only contain words and spaces",
            },
          })}
          errors={errors}
        />

        <Input
          name="content"
          placeholder="Content - Text"
          style={textareaStyle}
          textarea={true}
          register={register({
            required: "This field is required",
            minLength: {
              value: 400,
              message: `Content needs to be at least 400 characters`,
            },
          })}
          errors={errors}
        />

        <ButtonContainer>
          <Button>Submit</Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setShowModal(false);
            }}
          >
            Cancel
          </Button>
        </ButtonContainer>
      </Form>
    </FormModal>
  );
};

export default Products;
