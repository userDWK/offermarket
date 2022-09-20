import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "../components/Main/MainHeader";
import MainFooter from "../components/Main/MainFooter";
import { useRecoilState } from "recoil";
import { IsLoggedIn } from "../atoms/State";
import ProfileMain from "../components/headerLi/profile/ProfileMain";
import ModifySell from "../components/headerLi/profile/ModifySell";
function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  return (
    <div className="profilePage">
      <MainHeader />
      <Routes>
        <Route path="/*" element={<ProfileMain />} />
        <Route path="/modify" element={<ModifySell />} />
      </Routes>
      <MainFooter />
    </div>
  );
}

export default ProfilePage;
