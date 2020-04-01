import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Container,
  FormContainer,
  StyledField,
  Button,
  LoginText,
  Login,
  Title,
} from "./styles";
import Layout from "../../components/Layout/index";

const styles = {
  root: {
    color: "white",
    margin: "10px",
  },
  input: {
    color: "white",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important",
  },
};

// make title a link to /

const SignUp = (props) => {
  const [state, setState] = useState(0);
  const { classes } = props;

  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <Container>
        <Title>
          {" "}
          <Login to="/"> Draw Dat</Login>
        </Title>
        <FormContainer>
          <StyledField
            id="outlined-basic"
            label="username"
            variant="outlined"
            className={classes.root}
            InputProps={{
              className: classes.input,
            }}
          />
          <StyledField
            id="outlined-basic"
            label="password"
            variant="outlined"
            className={classes.root}
            InputProps={{
              className: classes.input,
            }}
          />
          <Button type="submit" onClick={handleSignUp}>
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

SignUp.propTypes = {
  classes: PropTypes.string.isRequired,
};

export default withStyles(styles)(SignUp);
