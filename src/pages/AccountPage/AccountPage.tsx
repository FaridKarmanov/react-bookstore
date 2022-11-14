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
  ButtonContainer,
  ErrorText,
} from "./styles";
import { LoadingSpinner, TitlePage } from "../../components";
import { ArrowHomeIcon } from "../../assets";
import { updateUserPassword } from "../../store/slices";

type SettingValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  newPassword: string;
};

export const AccountPage = () => {
  const { email, name, isLoading } = useAppSelector(getUser);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SettingValues>();

  const { newPassword, confirmPassword } = watch();

  const onSubmit: SubmitHandler<SettingValues> = ({
    newPassword,
    confirmPassword,
    password,
  }) => {
    setErrorMessage(null);
    if (newPassword === confirmPassword) {
      dispatch(updateUserPassword({ newPassword, password }))
        .unwrap()
        .catch((err) => {
          setErrorMessage(err);
        })
        .finally(() => {
          reset();
        });
    }
  };

  return (
    <>
      <TitleContainer>
        <Link to="/">
          <ArrowHomeIcon />
        </Link>
        <TitlePage>Your cart</TitlePage>
      </TitleContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Input
            placeholder="Your password"
            {...register("password", { required: "Password is required" })}
          />
          <ErrorText>{errorMessage}</ErrorText>
          <ErrorText>{errors.password?.message}</ErrorText>

          <SubTitle>New Password</SubTitle>
          <Input
            placeholder="New password"
            {...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 6,
                message: "Password must contain at least 6 characters",
              },
            })}
          />
          <ErrorText>{errors.newPassword?.message}</ErrorText>

          <SubTitle>Confirm new password</SubTitle>
          <Input
            placeholder="Confirm new password"
            {...register("confirmPassword", {
              required: "Confirm new password",
            })}
          />
          <ErrorText>{errors.confirmPassword?.message}</ErrorText>

          {confirmPassword !== newPassword && (
            <ErrorText>Password don't match</ErrorText>
          )}
        </Container>
        <ButtonContainer>
          <ButtonSave type="submit">
            {isLoading ? <LoadingSpinner /> : "Save changes"}
          </ButtonSave>
          <ButtonCancel onClick={() => navigate("/")}>Cancel</ButtonCancel>
        </ButtonContainer>
      </Form>
    </>
  );
};
