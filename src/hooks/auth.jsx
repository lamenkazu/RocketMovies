import { useState, useEffect, createContext, useContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("/Sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível logar");
      }
    }
  };

  const signOut = () => {
    setData({});
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");
  };

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
