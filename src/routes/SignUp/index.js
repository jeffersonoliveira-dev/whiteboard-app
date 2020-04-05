import React from "react";
// import { useForm } from "react-hook-form";
import {
  Container,
  FormContainer,
  FormLabel,
  InputContainer,
  FormField,
  Button,
  LoginText,
  Login,
  Title,
} from "./styles";
import Layout from "../../components/Layout/index";

// make title a link to /

const SignUp = () => {
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
          <Login to="/"> Draw Dat</Login>
        </Title>

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

        <FormContainer>
          <Button to="/#" type="submit" onClick={handleLogin}>
            Sign up
          </Button>
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
