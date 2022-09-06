import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainHeader from "../components/Main/MainHeader";
import { useRecoilState } from "recoil";
import { IsLoggedIn } from "../atoms/State";
import LoginMain from "../components/headerLi/login/LoginMain";
import CreateMain from "../components/headerLi/login/CreateMain";
function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  return (
    <div className="loginPage">
      <MainHeader />
      <Routes>
        <Route path="" element={<LoginMain />} />
        <Route path="create" element={<CreateMain />} />
      </Routes>
    </div>
  );
}

export default LoginPage;
