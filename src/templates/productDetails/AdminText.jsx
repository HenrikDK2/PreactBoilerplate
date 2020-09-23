import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import Icon from "../../components/Icon";
import { useForm } from "react-hook-form";
import Input from "../../components/FormInput";

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
  }
  textarea {
    min-width: 100%;
    max-width: 100%;
  }
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
