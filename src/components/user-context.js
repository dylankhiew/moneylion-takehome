import React from "react";

const UserContext = React.createContext({
  user: {
      firstName: "",
      lastName: "",
      Email: "",
      dob: "",
      agreement1: false,
      agreement2: false
  },
  setUser: () => {}
});

export default UserContext;