import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Ui/Button";
import ProductCon from "../../Ui/ProductCon";
import Products from "../Products";

const PurchageMain = () => {
  return (
    <ProductCon>
      <div className="productResist">
        <Link to="/purchase/resist">
          <Button>구매 등록하기</Button>
        </Link>
      </div>
      <Products />
      <Products />
      <Products />
      <Products />
    </ProductCon>
  );
};

export default PurchageMain;
