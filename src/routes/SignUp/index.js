import React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  FormContainer,
  FormLabel,
  FormField,
  Button,
  LoginText,
  Login,
  Title,
} from "./styles";
import Layout from "../../components/Layout/index";

// make title a link to /

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("clicked");
    // handle form
  };

  return (
    <Layout>
      <Container>
        <FormField
          type="input"
          placeholder="name"
          name="name"
          id="name"
          required
        />
        <FormLabel htmlFor="name">Name </FormLabel>
        <Title>
          {" "}
          <Login to="/"> Draw Dat</Login>
        </Title>
        <FormContainer>
          <Button to="/#" type="submit" onClick={handleSignUp}>
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
