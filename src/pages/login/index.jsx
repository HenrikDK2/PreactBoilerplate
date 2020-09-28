import React from "react";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import Input from "../../components/FormInput";
import FormButton from "../../components/FormButton";

const Section = styled.section``;
const Form = styled.form`
  margin: 0 auto;
  max-width: 400px;
`;

const Submit = styled(FormButton)`
  display: block;
  margin: 0 auto;
  width: 100%;
  font-size: 1.25rem;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

const inputStyle = css`
  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1.25rem;
    box-sizing: Border-box;
  }
`;

const Login = () => {
  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Section>
      <Heading>Login</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register({
            required: "This field is required",
          })}
          name="username"
          placeholder="Brugernavn"
          style={inputStyle}
          errors={errors}
        />
        <Input
          register={register({
            required: "This field is required",
          })}
          name="password"
          placeholder="Adgangskode"
          style={inputStyle}
          errors={errors}
        />
        <Submit>Log ind</Submit>
      </Form>
    </Section>
  );
};

export default Login;
