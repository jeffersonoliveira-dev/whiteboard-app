import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container, FormContainer, StyledField, SignUpButton,
} from "./styles";
import Layout from "../../components/Layout/index";

const SignUp = () => {
  const [state, setState] = useState(0);

  const handleButton = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  return (
    <Layout>
      <Container>
        <Link to="/">back</Link>
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
          <SignUpButton type="submit" onClick={handleButton}>
            Sign Up
          </SignUpButton>
        </FormContainer>
      </Container>
    </Layout>
  );
};

export default SignUp;
