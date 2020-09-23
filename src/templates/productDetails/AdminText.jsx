import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import Icon from "../../components/Icon";
import { useForm } from "react-hook-form";
import Input from "../../components/FormInput";

let textContent;
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
  const showForm = () => {
    setFormData({
      showForm: true,
      content: textRef.current.innerText,
      fontSize: window.getComputedStyle(textRef.current).fontSize,
    });
  };
  const { register, handleSubmit, errors } = useForm({ mode: "onChange", shouldUnregister: false });
  const CustomTag = `${tag}`;
  const onSubmit = (data) => {
    textContent = data.content;
    setFormData({ showForm: false, content: data.content });
  };

  if (!textContent) textContent = content;

  if (!formData.showForm) {
    return (
      <Container>
        <CustomTag ref={textRef}>{formData.content}</CustomTag>
        <EditButton onClick={() => showForm()} icon="pencil-alt" />
      </Container>
    );
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          style={css`
            input {
              font-size: ${formData.fontSize};
            }
          `}
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
      <Cancel
        onClick={() => {
          setFormData({ showForm: false, content: textContent });
        }}
      >
        Cancel
      </Cancel>
    </FormContainer>
  );
};

export default AdminText;
