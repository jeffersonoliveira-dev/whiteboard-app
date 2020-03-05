const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      // resolve login
      console.log("call de login aqui");
      return state;
    default:
      return state;
  }
};

export default authReducer;
