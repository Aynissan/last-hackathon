import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_AUTH_REGISTER } from "../../helpers";
import axios from "axios";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  const register = async (formData) => {
    try {
      const res = await axios.post(`${API_AUTH_REGISTER}`, formData);
      console.log(res);
      navigate("/login");
    } catch (e) {
      setError(e);
    }
  };

  let value = {
    user,
    error,

    // login,
    register,
    // logout,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
