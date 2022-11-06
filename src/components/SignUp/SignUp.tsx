import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Form, Input, Title } from "./styles";

type FormValues = {
  email: string;
  password: string;
  name: string;
};

export const SignUp = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Name</Title>
      <Input placeholder="Your name" {...register("name")} />
      <Title>Email</Title>
      <Input placeholder="Your email" {...register("email")} />
      <Title>Password</Title>
      <Input placeholder="Your password" {...register("password")} />
      <Button type="submit">sign up</Button>
    </Form>
  );
};
