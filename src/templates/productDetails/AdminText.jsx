import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import Icon from "../../components/Icon";
import { useForm } from "react-hook-form";
import Input from "../../components/FormInput";
import Button from "../../components/FormButton";

const EditButton = styled(Icon)`
  color: #000;
  cursor: pointer;
  position: absolute;
  top: -0.5rem;
  right: -1.25rem;
`;

const Container = styled.div`
  position: relative;
  margin: 1rem 0;
  display: block;
`;

const Form = styled.form`
  width: 100%;
  label,
  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
  }
  textarea {
    min-width: 100%;
    max-width: 100%;
  }
`;

const Cancel = styled(Button)`
  position: absolute;
  left: 0rem;
`;

const Submit = styled(Cancel)`
  left: initial;
  right: 0rem;
`;

const FormContainer = styled(Container)`
  width: 100%;
  margin: 1rem 0 2rem;
  button {
    bottom: -0.8rem;
  }
  span {
    margin: 0.25rem auto;
    min-height: 25px;
  }
`;

const AdminText = ({ content, tag }) => {
  const textRef = useRef();
  const [formData, setFormData] = useState({ showForm: false, content });
  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });
  const CustomTag = `${tag}`;
  const onSubmit = (data) => {
    setFormData({ showForm: false, content: data.content });
  };

  if (!formData.showForm) {
    return (
      <Container>
        <CustomTag ref={textRef}>{formData.content}</CustomTag>
        <EditButton onClick={() => showForm(textRef, setFormData)} icon="pencil-alt" />
      </Container>
    );
  }

  const customStyle = css`
    input {
      font-size: ${formData.fontSize};
    }
    textarea {
      height: ${formData.height};
    }
  `;

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          style={customStyle}
          name="content"
          onChange={(e) => setFormData({ ...formData, content: e.currentTarget.value })}
          textarea={tag === "p"}
          value={formData.content}
          register={register({
            required: "This field can't be empty",
            minLength: {
              value: tag !== "p" ? 10 : 400,
              message: `${
                tag !== "p"
                  ? "Title needs to be at least 10 characters"
                  : "Content needs to be at least 400 characters"
              }`,
            },
            validate: {
              pattern: (value) => {
                const regex = /^[a-å A-Å_ ]*$/;
                if (tag !== "p" && !regex.test(value)) {
                  return "Title can only contain words and spaces";
                }
              },
            },
          })}
          errors={errors}
        />
        <Submit>Submit</Submit>
      </Form>
      <Cancel onClick={() => setFormData({ showForm: false, content: formData.oldContent })}>
        Cancel
      </Cancel>
    </FormContainer>
  );
};

const showForm = (textRef, setFormData) => {
  setFormData({
    showForm: true,
    content: textRef.current.innerText,
    oldContent: textRef.current.innerText,
    fontSize: window.getComputedStyle(textRef.current).fontSize,
    height: window.getComputedStyle(textRef.current).height,
  });
};

export default AdminText;
