import React from "react";
import {
  Container, FormContainer, StyledField, LoginButton,
} from "./styles";
import Layout from "../../components/Layout/index";

const Login = () => {
  const handleLoginButton = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <Layout>
      <Container>
        <FormContainer>
          <StyledField
            id="outlined-basic"
            label="username"
            variant="outlined"
          />
          <StyledField
            id="outlined-basic"
            label="password"
            variant="outlined"
          />
          <LoginButton type="submit" onClick={handleLoginButton}>
            Login
          </LoginButton>
        </FormContainer>
      </Container>
    </Layout>
  );
};

export default Login;
