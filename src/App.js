import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { authService, dbService } from "./fbase";
import LoginPage from "./page/LoginPage";
import MainPage from "./page/MainPage";
import PurchasePage from "./page/PurchasePage";
import SellPage from "./page/SellPage";
import "./Ui/styles.css";
import { useRecoilState } from "recoil";
import { IsLoggedIn, Today, UserObj } from "./atoms/State";
import ProfilePage from "./page/ProfilePage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [today, setToday] = useRecoilState(Today);
  const [timeCount, setTimeCount] = useState(0);

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
  }, []);
  // const Time = () => {
  //   const now = new Date();
  //   setToday(
  //     now.getFullYear().toString() +
  //       ((now.getMonth() + 1).toString().length === 1
  //         ? "0" + (now.getMonth() + 1).toString()
  //         : (now.getMonth() + 1).toString()) +
  //       (now.getDate().toString().length === 1
  //         ? "0" + now.getDate().toString()
  //         : now.getDate().toString()) +
  //       now.getHours().toString() +
  //       now.getMinutes().toString() +
  //       now.getSeconds().toString() +
  //       now.getMilliseconds().toString()
  //   );
  //   setTimeout(() => {
  //     setTimeCount((prev) => ++prev);
  //   }, 800);
  // };
  // useEffect(() => {
  //   Time();
  // }, [timeCount]);

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
