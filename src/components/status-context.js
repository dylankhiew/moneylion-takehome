import React from "react";

const StatusContext = React.createContext({
  status: {
    currentPath: '',
    isStarted: false,
    disPersonal: true,
    disDob: true,
    disAgreement: true
  },
  setStatus: () => {}
});

export default StatusContext;