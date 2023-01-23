import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_AUTH_LOGIN, API_AUTH_REGISTER } from "../../helpers";
import axios from "axios";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  const register = async (formData) => {
    try {
      console.log(`${API_AUTH_REGISTER}`);
      const res = await axios.post(`${API_AUTH_REGISTER}`, formData);
      console.log(res);
      navigate("/login");
    } catch (e) {
      setError(e);
    }
  };

  const login = async (formData, email) => {
    try {
      const res = await axios.post(`${API_AUTH_LOGIN}`, formData);
      console.log(res.data);

      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);

      setUser(email);
      navigate("/");
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };

  let value = {
    user,
    error,

    login,
    register,
    // logout,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
