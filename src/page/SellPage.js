import React from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "../components/Main/MainHeader";
import SellMain from "../components/sell/SellMain";
import PurchaseResistPage from "./PurchaseResistPage";

function SellPage() {
  return (
    <div className="sellPage">
      <MainHeader />

      <Routes>
        <Route path="" element={<SellMain />} />
        <Route path="resist" element={<PurchaseResistPage />} />
      </Routes>
    </div>
  );
}

export default SellPage;
