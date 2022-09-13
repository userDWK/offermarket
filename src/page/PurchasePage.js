import React from "react";
import { Route, Routes } from "react-router-dom";
import MainFooter from "../components/Main/MainFooter";
import MainHeader from "../components/Main/MainHeader";
import PurchageMain from "../components/purchage/PurchageMain";
import PurchaseProduct from "../components/purchage/PurchaseProduct";
import PurchaseResistPage from "../components/purchage/PurchaseResistPage";

function PurchasePage() {
  return (
    <div className="purchasePage">
      <MainHeader />

      <Routes>
        <Route path="/*" element={<PurchageMain />} />
        <Route path="resist" element={<PurchaseResistPage />} />
        <Route path="product/*" element={<PurchaseProduct />} />
      </Routes>

      <MainFooter />
    </div>
  );
}

export default PurchasePage;
