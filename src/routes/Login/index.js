import React from "react";
// import { useForm } from "react-hook-form";
import {
  Container,
  FormContainer,
  FormLabel,
  InputContainer,
  FormField,
  SubmitButton,
  LoginText,
  Home,
  Title,
} from "./styles";
import Layout from "../../components/Layout/index";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("clicked");
    // handle form
  };

  return (
    <Layout>
      <Container>
        <Title>
          {" "}
          <Home to="/"> Draw Dat</Home>
        </Title>

        <FormContainer>
          <InputContainer>
            <FormField
              type="input"
              placeholder="username"
              name="username"
              id="username"
              required
              username
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
            />
            <FormLabel htmlFor="password" password>
              password
              {" "}
            </FormLabel>
          </InputContainer>

          <SubmitButton to="/#" type="submit" onClick={handleLogin}>
            Login
          </SubmitButton>
          <LoginText>
            Don&apos;t have an account?
            {' '}
            <Home to="/signup">Sign up</Home>
          </LoginText>
        </FormContainer>
      </Container>
    </Layout>
  );
};

export default Login;
