import React from "react";
import Layout from "../../components/Layout/index";
import {
  Container,
  ButtonGhost,
  LogoContainer,
  StyledLogo,
  AppTitle,
  ButtonContainer,
  SignupText,
  SignUp,
} from "./styles";

const Home = () => (
  <Layout>
    <Container>
      <LogoContainer>
        <StyledLogo />
        <AppTitle>DrawDat</AppTitle>
      </LogoContainer>
      <ButtonContainer>
        <ButtonGhost to="/login">start</ButtonGhost>
      </ButtonContainer>
      <SignupText>
        Don&apos;t have an account?
        {' '}
        <SignUp to="/signup">Sign up</SignUp>
      </SignupText>
    </Container>
  </Layout>
);

export default Home;
