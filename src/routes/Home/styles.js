import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  width: 80%;
`;

export const LoginButton = styled(Link)`
  text-decoration: none;
  background-color: #7289da;
  color: white;
  padding: 5px;
  widht: 100%;
  border-radius: 5px;
`;

