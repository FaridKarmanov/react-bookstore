import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/selectors";
import {
  Form,
  Container,
  Title,
  TitleContainer,
  SubTitle,
  Input,
  ButtonSave,
  ButtonCancel,
} from "./styles";
import { TitlePage } from "../../components";
import { ArrowHomeIcon } from "../../assets";

type SettingValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  newPassword: string;
};

export const AccountPage = () => {
  const { email, name } = useAppSelector(getUser);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingValues>();

  const { newPassword, confirmPassword } = watch();

  const onSubmit: SubmitHandler<SettingValues> = ({
    newPassword,
    confirmPassword,
    password,
  }) => {};
  return (
    <>
      <TitleContainer>
        <Link to="/">
          <ArrowHomeIcon />
        </Link>
        <TitlePage>Your cart</TitlePage>
      </TitleContainer>
      <Form>
        <Container>
          <Title>Profile</Title>
          <SubTitle>Name</SubTitle>
          <Input defaultValue={name ? name : ""} />
          <SubTitle>Email</SubTitle>
          <Input defaultValue={email ? email : ""} />
        </Container>
        <Container>
          <Title>Password</Title>
          <SubTitle>Password</SubTitle>
          <Input placeholder="Your password" />

          <SubTitle>New Password</SubTitle>
          <Input placeholder="New password" />

          <SubTitle>Confirm new password</SubTitle>
          <Input placeholder="Confirm new password" />
        </Container>
        <ButtonSave type="submit">Save changes</ButtonSave>
        <ButtonCancel onClick={() => navigate("/")}>Cancel</ButtonCancel>
      </Form>
    </>
  );
};
