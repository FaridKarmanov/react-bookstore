import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Form, Header, Input, Title } from "./styles";

type FormValues = {
  email: string;
};

export const Reset = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Header>Reset password</Header>
      <Title>Email</Title>
      <Input placeholder="Your email" {...register("email")} />
      <Link to="/sign-in">Sign In</Link>
      <Button type="submit">Reset</Button>
    </Form>
  );
};
