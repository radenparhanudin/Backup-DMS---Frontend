import { createContext, useContext, useState } from "react";
const StateUserContext = createContext({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, _setUser] = useState(JSON.parse(localStorage.getItem("USER")));
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setUser = (user) => {
    if (user) {
      _setUser(JSON.parse(user));
      localStorage.setItem("USER", user);
    } else {
      localStorage.removeItem("USER");
    }
  };

  const setToken = (token) => {
    if (token) {
      _setToken(token);
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };
  return (
    <StateUserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </StateUserContext.Provider>
  );
};

export const useStateUserContext = () => useContext(StateUserContext);
