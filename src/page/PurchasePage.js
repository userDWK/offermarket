import React from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "../components/Main/MainHeader";
import PurchageMain from "../components/purchage/PurchageMain";
import TradeResist from "./TradeResist";

function PurchasePage() {
  return (
    <div className="purchasePage">
      <MainHeader />
      <Routes>
        <Route path="" element={<PurchageMain />} />
        <Route path="resist" element={<TradeResist />} />
      </Routes>
    </div>
  );
}

export default PurchasePage;
