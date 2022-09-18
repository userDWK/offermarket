import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "../components/Main/MainHeader";
import MainFooter from "../components/Main/MainFooter";
import { useRecoilState } from "recoil";
import { IsLoggedIn } from "../atoms/State";
import ProfileMain from "../components/headerLi/profile/ProfileMain";
function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  return (
    <div className="profilePage">
      <MainHeader />
      <ProfileMain />
      <MainFooter />
    </div>
  );
}

export default ProfilePage;
