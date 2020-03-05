import React from "react";
import { Container, FormContainer, StyledField } from "./styles";
import Layout from "../../components/Layout/index";

const Login = () => (
  <Layout>
    <Container>
      <FormContainer>
        <StyledField id="outlined-basic" label="username" variant="outlined" />
        <StyledField id="outlined-basic" label="password" variant="outlined" />
      </FormContainer>
    </Container>
  </Layout>
);

export default Login;
