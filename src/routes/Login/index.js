import React from "react";
import { TextField } from "@material-ui/core";
import { Container, FormContainer } from "./styles";
import Layout from "../../components/Layout/index";

const Login = () => (
  <Layout>
    <Container>
      <FormContainer>
        <TextField id="outlined-basic" label="username" variant="outlined" />
        <TextField id="outlined-basic" label="password" variant="outlined" />
      </FormContainer>
    </Container>
  </Layout>
);

export default Login;
