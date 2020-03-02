import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/index";
import { Container, LoginButton } from "./styles";

const Home = () => {
  return (
    <Layout>
      <Container>henricão</Container>
      <LoginButton to="/login">login</LoginButton>
    </Layout>
  );
};

export default Home;
