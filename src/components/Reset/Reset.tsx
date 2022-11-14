import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "..";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/selectors";
import { resetUserPassword } from "../../store/slices";
import { Button, ErrorText, Form, Header, Input, Text, Title } from "./styles";

type FormValues = {
  email: string;
};

export const Reset = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { isLoading } = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = ({ email }) => {
    setErrorMessage(null);
    dispatch(resetUserPassword({ email }))
      .unwrap()
      .catch((err) => {
        console.log(err);
        setErrorMessage(err);
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Header>Reset password</Header>
      <Title>Email</Title>
      <Input
        placeholder="Your email"
        {...register("email", { required: "Email is required" })}
      />
      <ErrorText>{errors.email?.message}</ErrorText>
      <ErrorText>{errorMessage}</ErrorText>

      <Link to="/sign-in">
        <Text>Sign In</Text>
      </Link>
      <Button type="submit"> {isLoading ? <LoadingSpinner /> : "Reset"}</Button>
    </Form>
  );
};
