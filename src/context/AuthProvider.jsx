import { keyToken, keyUser } from "@/constant/auth";
import { loginByGoogle } from "@/services/auth";
import { useGoogleLogin } from "@react-oauth/google";
import React, { useContext, useState } from "react";

export const AuthContext = React.createContext({
  user: {},
  login: () => {},
  logout: () => {},
  loginGoogle: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(keyUser)));
  const login = (data) => {
    localStorage.setItem(keyUser, JSON.stringify(data));
    setUser(data);

    localStorage.setItem(keyToken, data.token);
  };
  const loginGoogle = useGoogleLogin({
    onSuccess: async (token) => {
      try {
        const res = await loginByGoogle(token.access_token);
        localStorage.setItem(keyUser, JSON.stringify(res?.data));
        setUser(res?.data);
      } catch (error) {}
    },
  });
  const logout = () => {
    setUser(null);
    localStorage.removeItem(keyUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loginGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
