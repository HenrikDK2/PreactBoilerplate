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
        aria="Name inputfield"
        placeholder="Your full name"
        register={register({
          required: "This field is required",
        })}
        errors={errors}
      />
      <Input
        name="email"
        placeholder="Your Email"
        aria="Email inputfield"
        register={register({
          required: "This field is required",
          pattern: {
            value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g,
            message: `Email is not valid, example of valid: "email@live.dk"`,
          },
        })}
        errors={errors}
      />
      <Input
        name="tlf"
        placeholder="Your tlf"
        aria="Tlf inputfield"
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
