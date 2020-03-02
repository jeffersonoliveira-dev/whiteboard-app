import React from "react";
import { Container, Box } from "./styles";

const Layout = props => {
  return (
    <Container>
      <Box>{props.children}</Box>
    </Container>
  );
};

export default Layout;
