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

export const LoginButton = styled.button`
  text-decoration: none;
  text-align: center;
  float: right;
  background-color: #7289da;
  color: white;
  padding: 5px;
  width: 30%;
  border-radius: 5px;
`;

export const Button = styled(Link)`
  position: relative;
  top: 40px;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid #7289da;
  background-color: #7289da;
  text-decoration: none;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin: 0 auto;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export const LoginText = styled.div`
  text-align: center;
  position: relative;
  top: 60px;
  text-decoration: none;
`;

export const Home = styled(Link)`
  text-decoration: none;
  color: #7289da;
`;

export const Title = styled.div`
  position: relaitve;
  text-align: center;
`;

export const FormContainer = styled.form`
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const FormField = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  display: block;

  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }

  &::placeholder {
    color: transparent;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;

  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }

  ${FormField}:placeholder-shown ~ & {
    font-size: 1rem;
    cursor: text;
    top: ${(props) => (props.username ? "70px" : "150px")};
  }

  ${FormField}:focus ~ & {
    position: absolute;
    top: ${(props) => (props.username ? "50px" : "120px")};
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #11998e;
    font-weight: 700;
  }
`;
