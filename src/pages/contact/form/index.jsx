import React from "react";
import Input from "../../../components/FormInput";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const SubmitButton = styled.button``;

const FormComponent = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        placeholder="Your full name"
        register={register({
          required: "This field is required",
        })}
        errors={errors}
      />
      <Input
        name="email"
        placeholder="Your Email"
        register={register({
          required: "This field is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: `Email is not valid, example of valid: "email@live.dk"`,
          },
        })}
        errors={errors}
      />
      <Input
        name="tlf"
        placeholder="Your tlf"
        register={register({
          required: "This field is required",
          pattern: {
            value: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i,
            message: "Not valid, number can't include letters",
          },
          minLength: {
            value: 8,
            message: "Atleast 8 numbers",
          },
        })}
        errors={errors}
      />
      <SubmitButton>tEST</SubmitButton>
    </Form>
  );
};

export default FormComponent;
