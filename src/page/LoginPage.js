import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateMain from "../components/login/CreateMain";
import LoginMain from "../components/login/LoginMain";
import MainHeader from "../components/Main/MainHeader";

function LoginPage({ isLoggedIn }) {
  const prevPage = useNavigate();
  return (
    <div className="loginPage">
      <MainHeader />
      <Routes>
        <Route path="" element={<LoginMain isLoggedIn={isLoggedIn} />} />
        <Route path="create" element={<CreateMain isLoggedIn={isLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default LoginPage;
