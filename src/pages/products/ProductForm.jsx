import React, { useEffect, useState, useRef } from "react";
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
  max-height: 100vh;
`;

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  padding: 2rem 1rem;
  box-sizing: border-box;
  overflow-y: auto;
  [name="image"] {
    cursor: pointer;
  }
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
  padding-bottom: 1rem;
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
    height: 300px;
    min-width: 100%;
    max-width: 100%;
  }
`;

const previewImage = css`
  width: 100%;
  min-height: 300px;
  margin-bottom: 10px;
  & img {
    object-fit: cover;
  }
`;

const Products = () => {
  const previewImageRef = useRef(null);
  const [showModal, setShowModal] = useRecoilState(ProductFormModal);
  const { register, handleSubmit, setError, errors } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormModal closeTimeoutMS={500} isOpen={showModal}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Image
          style={previewImage}
          src="/placeholder-image.jpg"
          ref={previewImageRef}
          alt="Preview Image"
        />
        <Input
          name="image"
          type="file"
          enableBorder={false}
          register={register({
            required: "Image file is required",
            validate: {
              fileType: (value) => {
                const validArr = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
                const image = value[0];

                if (image.type.length < 1 || !validArr.includes(image.type)) {
                  previewImageRef.current.base.children[0].setAttribute(
                    "src",
                    "/placeholder-image.jpg"
                  );

                  return "Not a supported file format";
                }

                const reader = new FileReader();
                reader.onload = function () {
                  const src = reader.result;
                  previewImageRef.current.base.children[0].setAttribute("src", src);
                };
                reader.readAsDataURL(image);
              },
            },
          })}
          errors={errors}
        />
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
            /*             minLength: {
              value: 400,
              message: `Content needs to be at least 400 characters`,
            }, */
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
