const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      // resolve login
      return state;

    case "auth":
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
