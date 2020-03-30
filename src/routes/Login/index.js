import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Container,
  FormContainer,
  StyledField,
  Button,
  SignupText,
  SignUp,
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

const Login = (props) => {
  const { classes } = props;

  const handleLoginButton = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <Layout>
      <Container>
        <Title>
          {" "}
          <SignUp to="/">Draw Dat</SignUp>
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
          <Button type="submit" onClick={handleLoginButton}>
            Login
          </Button>
          <SignupText>
            Not sure if you have an account?
            {" "}
            <SignUp to="/signup">Sign up</SignUp>
          </SignupText>
        </FormContainer>
      </Container>
    </Layout>
  );
};

Login.propTypes = {
  classes: PropTypes.string.isRequired,
};

export default withStyles(styles)(Login);
