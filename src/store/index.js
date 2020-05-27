import { createContext } from "react";

export const initialState = {
  user: "",
  token: "",
  history: [],
};

const AuthContext = createContext(initialState);

export default AuthContext;
