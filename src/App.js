import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { authService, dbService } from "./fbase";
import LoginPage from "./page/LoginPage";
import MainPage from "./page/MainPage";
import PurchasePage from "./page/PurchasePage";
import SellPage from "./page/SellPage";
import "./Ui/styles.css";
import { useRecoilState } from "recoil";
import { IsLoggedIn, UserObj } from "./atoms/State";
import ProfilePage from "./page/ProfilePage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        dbService.collection("users").onSnapshot((doc) => {
          doc.docs.forEach((document) => {
            if (document.data().uid === user.uid) {
              setUserObj({
                email: document.data().email,
                uid: user.uid,
                name: document.data().name,
                password: document.data().password,
                address: document.data().address,
                phone: document.data().phone,
              });
            }
          });
        });
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="login/*" element={<LoginPage />} />
          <Route path="profile/*" element={<ProfilePage />} />
          <Route path="purchase/*" element={<PurchasePage />} />
          <Route path="sell/*" element={<SellPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
