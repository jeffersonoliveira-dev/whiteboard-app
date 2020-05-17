import React, { useContext } from "react";
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import AuthContext from "../../store/index";
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

const Login = (props) => {
  const { register, handleSubmit } = useForm();
  const [globalState, dispatch] = useContext(AuthContext);

  // create function before component renders
  // check if localStorage have something
  // call out server with localStorage data


  const handleLogin = (data) => {
    axios.post("/api/login", data).then((response) => {
      if (response.data) {
        // dispatch ( newdata, type to reducer )
        dispatch({ type: "auth", payload: response.data });

        // localStorage.setItem("token", token);
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
          <Home to="/"> Draw Dat</Home>
        </Title>

        <FormContainer onSubmit={handleSubmit(handleLogin)}>
          <InputContainer>
            <FormField
              type="input"
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

          <SubmitButton type="submit">Login</SubmitButton>
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

Login.propTypes = {
  history: PropTypes.string.isRequired,
};

export default withRouter(Login);
