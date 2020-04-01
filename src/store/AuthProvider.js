import * as React from "react";
import PropTypes from "prop-types";
import AuthContext from "./index";
import authReducer from "./authReducer";

const AuthProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, {});
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
