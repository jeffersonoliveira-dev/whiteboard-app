import * as React from "react";
import AuthContext from "./index";
import authReducer from "./authReducer";

const AuthProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, {
    // initial state
  });

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
