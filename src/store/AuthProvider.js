import * as React from "react";
import PropTypes from "prop-types";
import AuthContext, { initialState } from "./index";
import authReducer from "./authReducer";

const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = React.useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

AuthProvider.defaultProps = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default AuthProvider;
