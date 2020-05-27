import axios from "axios";

const authReducer = (state, action) => {
  switch (action.type) {
    case "authenticate":
      axios("/api/user", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => {
        // change default state here
      });

      return state; // new state with user changes

    case "auth":
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
