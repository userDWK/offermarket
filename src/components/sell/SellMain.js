import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Ui/Button";
import ProductCon from "../../Ui/ProductCon";
import Products from "../Products";

const SellMain = () => {
  return (
    <ProductCon>
      <div className="productResist">
        <Link to="/sell/resist">
          <Button>판매 등록하기</Button>
        </Link>
      </div>
      <Products />
      <Products />
      <Products />
      <Products />
    </ProductCon>
  );
};

export default SellMain;
