import React from "react";

const SignupContext = React.createContext({
  user: {
    firstName: "",
    lastName: "",
    Email: "",
    dob: "",
    agreement1: false,
    agreement2: false
  },
  status: {
    currentPath:'',
    isStarted: false,
    disPersonal: true,
    disDob: true,
    disAgreement: true
  },
  setSignup: () => {}
});

export default SignupContext;