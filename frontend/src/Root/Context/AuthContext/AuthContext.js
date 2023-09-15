import React, { createContext } from "react";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const AuthValue = {};

  return (
    <AuthProvider.Provider value={AuthValue}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
