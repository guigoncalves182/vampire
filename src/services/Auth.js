import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = sessionStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  function login({ login, senha }) {
    const data = {
      login: login,
      senha: senha,
    };

    const config = {
      method: "post",
      url: "https://oportunidades.recode.org.br/api/login",

      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        if (response.status === 200) {
          const logedUser = response.data;
          sessionStorage.setItem("user", JSON.stringify(logedUser));

          setUser(logedUser);
          navigate("/secret");
        }
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          //SWAL originall
          console.log({
            title: "Credenciais incorretas!",
            text: "Seu e-mail e/ou senha podem estar incorretos. ",
            icon: "error",
            confirmButtonColor: "#212529",
          });
        } else {
          console.log({
            title: "Erro de comunicação com o servidor",
            text: "Ocorreu um erro interno.",
            icon: "error",
            confirmButtonColor: "#212529",
          });
        }
      });
  }

  function logout() {
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user, //checando se é um falsY no objeto
        user, //State
        loading, //State
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function Private({ children }) {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) return "Carregando...";
  if (!authenticated) return <Navigate to="/login" />;
  return children;
}
