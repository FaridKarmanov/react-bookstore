import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Form, Input, Title } from "./styles";

type FormValues = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Email</Title>
      <Input placeholder="Your email" {...register("email")} />
      <Title>Password</Title>
      <Input placeholder="Your password" {...register("password")} />
      <Link to="/reset">Forgot password?</Link>
      <Button type="submit">sign in</Button>
    </Form>
  );
};
