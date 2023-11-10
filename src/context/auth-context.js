import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  login: (token) => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const loginHandler = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const contextValue = {
    token: token,
    login: loginHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
