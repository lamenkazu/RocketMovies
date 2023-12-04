import { useState, useEffect, createContext, useContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setAuthToken = (token) => {
    return (api.defaults.headers.common["Authorization"] = `Bearer ${token}`);
  };

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("/Sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      setAuthToken(token);

      setData({ user, token });
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível logar");
      }
    }
  };

  const updateUser = async ({ user, avatarFile }) => {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/Users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/Users", user);
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));

      setData({ user, token: data.token });

      alert("Perfil Atualizado!");
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possivel atualizar os dados do usuario");
      }
    }
  };

  const signOut = () => {
    setData({});
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");
  };

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token");
    const user = localStorage.getItem("@rocketmovies:user");

    if (token && user) {
      setAuthToken(token);
      setData({
        user: JSON.parse(user),
        token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, updateUser, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
