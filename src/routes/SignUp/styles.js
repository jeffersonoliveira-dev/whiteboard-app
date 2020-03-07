import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  width: 80%;
`;

export const FormContainer = styled.form`
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const StyledField = styled(TextField)`
  color: white;
`;

export const SignUpButton = styled.button`
  text-decoration: none;
  text-align: center;
  float: right;
  background-color: #7289da;
  color: white;
  padding: 5px;
  width: 30%;
  border-radius: 5px;
`;

