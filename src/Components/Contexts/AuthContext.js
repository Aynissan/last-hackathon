import React, { useContext } from "react";

export const authContext = useContext();

const AuthContextProvider = ({ children }) => {
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
