import React, { useEffect, useState, createContext } from "react";
import { axiosClient } from "../utils/axiosClient";
import {
  KEY_ACCESS_TOKEN,
  getItem,
  removeItem,
  setItem,
} from "../utils/localStorageManager";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getItem(KEY_ACCESS_TOKEN));
  }, []);

  const signin = async (email, password) => {
    try {
      const payload = await axiosClient.post("/auth/login", {
        email,
        password,
      });
      setItem(KEY_ACCESS_TOKEN, payload.result.accessToken);
      navigate("/course");
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (name, email, password, setError) => {
    try {
      const response = await axiosClient.post("/auth/signup", {
        name,
        email,
        password,
      });
      console.log("response : ", response);

      if (response.statusCode == "409" || response.statusCode == "400") {
        setError(response.result);
        console.log("error found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function signout() {
    removeItem(KEY_ACCESS_TOKEN);
    window.location.replace("/", "_self");
    console.log("logged out");
  }

  return (
    <AuthContext.Provider value={{ user, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
