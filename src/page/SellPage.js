import React from "react";
import { Route, Routes } from "react-router-dom";
import MainFooter from "../components/Main/MainFooter";
import MainHeader from "../components/Main/MainHeader";
import SellMain from "../components/sell/SellMain";
import SellProduct from "../components/sell/SellProduct";
import SellResistPage from "../components/sell/SellResistPage";

function SellPage() {
  return (
    <div className="sellPage">
      <MainHeader />

      <Routes>
        <Route path="/*" element={<SellMain />} />
        <Route path="resist" element={<SellResistPage />} />
        <Route path="product/*" element={<SellProduct />} />
      </Routes>

      <MainFooter />
    </div>
  );
}

export default SellPage;
