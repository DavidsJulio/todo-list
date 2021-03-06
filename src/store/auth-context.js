import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  userId: "",
  login: (token) => {},
  logout: () => {},
});

const calculateTime = (experationTime) => {
  const currentTime = new Date().getTime();
  const adjExperationTime = new Date(experationTime).getTime();

  const remainingTime = adjExperationTime - currentTime;

  return remainingTime;
};

const retriveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedTime = localStorage.getItem("experationTime");
  const storedUserId = localStorage.getItem("userId");
  const remainingTime = calculateTime(storedTime);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("experationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    userId: storedUserId,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retriveStoredToken();
  let initialToken;
  let initialUserId;
  if (tokenData) {
    initialToken = tokenData.token;
    initialUserId = tokenData.userId;
  }
  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(initialUserId);
  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("experationTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, experationTime, userId) => {
    setToken(token);
    setUserId(userId);
    localStorage.setItem("token", token);
    localStorage.setItem("experationTime", experationTime);
    localStorage.setItem("userId", userId);
    const remainingTime = calculateTime(experationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    userId: userId,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
