import React from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "../components/Main/MainHeader";
import SellMain from "../components/sell/SellMain";
import TradeResist from "./TradeResist";

function SellPage() {
  return (
    <div className="sellPage">
      <MainHeader />

      <Routes>
        <Route path="" element={<SellMain />} />
        <Route path="resist" element={<TradeResist />} />
      </Routes>
    </div>
  );
}

export default SellPage;
