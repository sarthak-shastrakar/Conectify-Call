import axios from "axios";
import httpStatus from "http-status";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import server from "../environment";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: `${server}/api/v1/users`,
});

export const AuthProvider = ({ children }) => {
  const authContext = useContext(AuthContext);

  const [userData, setUserData] = useState(authContext);

  const router = useNavigate();

  const handleRegister = async (name, username, password) => {
    try {
      let request = await client.post("/register", {
        name: name,
        username: username,
        password: password,
      });

      if (request.status === httpStatus.CREATED) {
        return request.data.message;
      }
    } catch (err) {
      throw err;
    }
  };

  const handleLogin = async (username, password) => {
    try {
      let request = await client.post("/login", {
        username: username,
        password: password,
      });

      console.log(username, password);
      console.log(request.data);

      if (request.status === httpStatus.OK) {
        localStorage.setItem("token", request.data.token);
        router("/home");
      }
    } catch (err) {
      throw err;
    }
  };

  const getHistoryOfUser = async () => {
    try {
      let request = await client.get("/get_all_activity", {
        params: {
          token: localStorage.getItem("token"),
        },
      });
      return request.data;
    } catch (err) {
      throw err;
    }
  };

  const addToUserHistory = async (meetingCode) => {
    try {
      let request = await client.post("/add_to_activity", {
        token: localStorage.getItem("token"),
        meeting_code: meetingCode,
      });
      return request;
    } catch (e) {
      throw e;
    }
  };

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) throw new Error("No token found");

      const response = await client.get(`/profile`, {
        params: { token },
      });

      if (response.status === httpStatus.OK) {
        setUserData(response.data);
        return response.data;
      }
    } catch (err) {
      throw err;
    }
  };

const logout = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) return;

    const response = await client.post("/logout", {
      token,
    });

    if (response.status === httpStatus.OK) {
      localStorage.removeItem("token");
      setUserData(null);
      router("/auth");
    }
  } catch (err) {
    console.error("Logout failed", err);
    localStorage.removeItem("token"); // force logout
    router("/auth");
  }
};


  const data = {
    userData,
    setUserData,
    addToUserHistory,
    getHistoryOfUser,
    handleRegister,
    handleLogin,
    getProfile,
    logout
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
