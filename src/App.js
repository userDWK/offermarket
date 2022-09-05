import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { authService } from "./fbase";
import LoginPage from "./page/LoginPage";
import MainPage from "./page/MainPage";
import PurchasePage from "./page/PurchasePage";
import SellPage from "./page/SellPage";
import "./Ui/styles.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          uid: user.uid,
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
          <Route
            path="login/*"
            element={<LoginPage isLoggedIn={isLoggedIn} />}
          />
          <Route path="purchase/*" element={<PurchasePage />} />
          <Route path="sell/*" element={<SellPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
