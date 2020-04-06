import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Container,
  FormContainer,
  FormLabel,
  InputContainer,
  FormField,
  SubmitButton,
  Button,
  LoginText,
  Login,
  Title,
} from "./styles";
import Layout from "../../components/Layout/index";

// make title a link to /

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    axios.post("/api/signup", data).then((response) => console.log(response));
  };

  return (
    <Layout>
      <Container>
        <Title>
          {" "}
          <Login to="/"> Draw Dat</Login>
        </Title>
        <FormContainer onSubmit={handleSubmit(handleSignUp)}>
          <InputContainer>
            <FormField
              type="text"
              placeholder="username"
              name="username"
              id="username"
              required
              username
              ref={register}
            />
            <FormLabel htmlFor="username" username>
              username
              {" "}
            </FormLabel>
          </InputContainer>
          <InputContainer>
            <FormField
              type="password"
              placeholder="password"
              name="password"
              id="password"
              required
              password
              ref={register}
            />
            <FormLabel htmlFor="password" password>
              password
              {" "}
            </FormLabel>
          </InputContainer>

          <SubmitButton type="submit">Sign up</SubmitButton>
          <LoginText>
            Do you have an account?
            {' '}
            <Login to="/login">Log in</Login>
          </LoginText>
        </FormContainer>
      </Container>
    </Layout>
  );
};

export default SignUp;
