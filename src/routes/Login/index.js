import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../../components/Layout/index";
import {
  Container,
  FormContainer,
  StyledField,
  Button,
  SignupText,
  SignUp,
  Title,
} from "./styles";

// change input render pls

const Login = () => (
  <Layout>
    <Container>
      <Title>
        {" "}
        <SignUp to="/">Draw Dat</SignUp>
      </Title>
      <FormContainer>
        <StyledField id="outlined-basic" label="username" variant="outlined" />
        <StyledField id="outlined-basic" label="password" variant="outlined" />
        <Button type="submit">Login</Button>
        <SignupText>
          Not sure if you have an account?
          {' '}
          <SignUp to="/signup">Sign up</SignUp>
        </SignupText>
      </FormContainer>
    </Container>
  </Layout>
);

export default Login;
