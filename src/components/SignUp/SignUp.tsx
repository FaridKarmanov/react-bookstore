import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/selectors";
import { fetchSignUp } from "../../store/slices";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { Button, ErrorText, Form, Input, Text, Title } from "./styles";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { isLoading } = useAppSelector(getUser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = ({ email, password, name }) => {
    setErrorMessage(null);
    if (password === confirmPassword) {
      dispatch(fetchSignUp({ email, password, name }))
        .unwrap()
        .then(() => navigate("/"))
        .catch((err) => {
          setErrorMessage(err);
        });
    }
  };

  const { password, confirmPassword } = watch();

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
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must contain at least 6 characters",
          },
        })}
      />
      <ErrorText>{errors.password?.message}</ErrorText>

      <Title>Confirm Password</Title>
      <Input placeholder="Your password" {...register("confirmPassword")} />
      {confirmPassword === password ? (
        <></>
      ) : (
        <ErrorText>Password don't match</ErrorText>
      )}
      <Link to="/sign-in">
        <Text>Already have an account?</Text>
      </Link>
      <ErrorText>{errorMessage}</ErrorText>
      <Button type="submit">
        {isLoading ? <LoadingSpinner /> : "sign up"}
      </Button>
    </Form>
  );
};
