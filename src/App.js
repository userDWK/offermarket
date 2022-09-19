import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { authService, dbService } from "./fbase";
import LoginPage from "./page/LoginPage";
import MainPage from "./page/MainPage";
import PurchasePage from "./page/PurchasePage";
import SellPage from "./page/SellPage";
import "./Ui/styles.css";
import { useRecoilState } from "recoil";
import {
  HandleTime,
  IsLoggedIn,
  IsResisted,
  PurchaseData,
  SellData,
  Today,
  UserObj,
} from "./atoms/State";
import ProfilePage from "./page/ProfilePage";
import { getDocs } from "firebase/firestore";
import InterestPage from "./page/InterestPage";
import CartPage from "./page/CartPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [today, setToday] = useRecoilState(Today);
  const [sellData, setSellData] = useRecoilState(SellData);
  const [purchaseData, setPurchaseData] = useRecoilState(PurchaseData);
  const [isResisted, setIsResisted] = useRecoilState(IsResisted);
  const [handleTime, setHandleTime] = useRecoilState(HandleTime);

  const sellDis = async () => {
    const sellRef = dbService.collection("sell");
    const q = sellRef.orderBy("resistDate", "desc");
    const data = await getDocs(q);
    setSellData(data.docs.map((doc) => doc.data()));
  };
  const purchaseDis = async () => {
    const purchaseRef = dbService.collection("purchase");
    const q = purchaseRef.orderBy("resistDate", "desc");
    const data = await getDocs(q);
    setPurchaseData(data.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        dbService.collection("users").onSnapshot((doc) => {
          doc.docs.forEach((document) => {
            if (document.data().uid === user.uid) {
              setUserObj({
                ...document.data(),
              });
            }
          });
        });
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
    });
    sellDis();
    purchaseDis();
  }, [isResisted]);
  const Time = () => {
    const now = new Date();
    let year = now.getFullYear().toString();
    let month = (now.getMonth() + 1).toString();
    let date = now.getDate().toString();
    let hours = now.getHours().toString();
    let minutes = now.getMinutes().toString();
    let seconds = now.getSeconds().toString();
    let milliseconds = now.getMilliseconds().toString();
    setToday(
      year +
        (month.length === 1 ? "0" + month : month) +
        (date.length === 1 ? "0" + date : date) +
        (hours.length === 1 ? "0" + hours : hours) +
        (minutes.length === 1 ? "0" + minutes : minutes) +
        (seconds.length === 1 ? "0" + seconds : seconds) +
        (milliseconds.length < 3
          ? milliseconds.length === 1
            ? "00" + milliseconds
            : "0" + milliseconds
          : milliseconds)
    );
  };
  useEffect(() => {
    Time();
  }, [handleTime]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="login/*" element={<LoginPage />} />
          <Route path="profile/*" element={<ProfilePage />} />
          <Route path="purchase/*" element={<PurchasePage />} />
          <Route path="sell/*" element={<SellPage />} />
          <Route path="interest/*" element={<InterestPage />} />
          <Route path="cart/*" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
