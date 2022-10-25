import React from "react";
import ReactDOM from "react-dom/client";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import { AuthProvider, Private } from "./services/Auth";

import "./globals/index.scss"

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Secret from "./pages/Secret/Secret";
import Generator from "./pages/Generator/Generator";
import NoPage from "./pages/NoPage";
// import Ficha from "./components/Ficha/Ficha";
// import Layout from "./pages/Layout/Layout";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/">
          <Route index element={<Generator />} />
          {/* <Route path="ficha" element={<Ficha />} /> */}

          <Route path=":id"  element={<Home />} />

          <Route path="login" element={<Login />} />
          <Route path="generator" element={<Generator />} />
          <Route path="secret" element={<Private><Secret /></Private>} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
