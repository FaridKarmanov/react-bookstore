import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/selectors";
import { fetchSignIn } from "../../store/slices";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { Button, ErrorText, Form, Input, Text, Title } from "./styles";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { isLoading, error } = useAppSelector(getUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = ({ email, password, name }) => {
    setErrorMessage(null);
    dispatch(fetchSignIn({ email, password, name }))
      .unwrap()
      .then(() => navigate("/"));
    setErrorMessage(error);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Name</Title>
      <Input
        placeholder="Your name"
        {...register("name", { required: "Name is required" })}
      />
      <ErrorText>{errors.name?.message}</ErrorText>

      <Title>Email</Title>
      <Input
        placeholder="Your email"
        {...register("email", { required: "Email is required" })}
      />
      <ErrorText>{errors.email?.message}</ErrorText>

      <Title>Password</Title>
      <Input
        placeholder="Your password"
        {...register("password", { required: "Password is required" })}
      />
      <ErrorText>{errors.password?.message}</ErrorText>
      <Link to="/reset">
        <Text>Forgot password?</Text>
      </Link>
      <ErrorText>{errorMessage}</ErrorText>
      <Button type="submit">
        {isLoading ? <LoadingSpinner /> : "sign in"}
      </Button>
    </Form>
  );
};
