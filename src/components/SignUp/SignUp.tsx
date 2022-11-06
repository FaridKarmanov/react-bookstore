import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Form, Input, Title } from "./styles";

type FormValues = {
  email: string;
  password: string;
  name: string;
};

export const SignUp = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
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
