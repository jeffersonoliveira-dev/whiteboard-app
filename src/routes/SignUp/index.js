import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Container,
  FormContainer,
  FormLabel,
  InputContainer,
  FormField,
  SubmitButton,
  LoginText,
  Login,
  Title,
} from "./styles";
import Layout from "../../components/Layout/index";

// send token to local storage and user data to context/reducer;

const SignUp = (props) => {
  const { register, handleSubmit } = useForm();

  const handleSignUp = (data) => {
    axios.post("/api/signup", data).then((response) => {
      const token = response.data.token[response.data.token.length - 1];
      if (response.data) {
        localStorage.setItem("token", token);
        // send user to context
        return props.history.push("/dashboard");
      }
      return alert("this username is already taken");
    });
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

SignUp.propTypes = {
  history: PropTypes.string.isRequired,
};

export default withRouter(SignUp);
