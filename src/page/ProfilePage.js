import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "../components/Main/MainHeader";
import { useRecoilState } from "recoil";
import { IsLoggedIn } from "../atoms/State";
import ProfileMain from "../components/headerLi/profile/ProfileMain";
function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  return (
    <div className="profilePage">
      <MainHeader />
      <ProfileMain />
      {/* <Routes>
        <Route path="profile" element={<ProfileMain />} />
      </Routes> */}
    </div>
  );
}

export default ProfilePage;
