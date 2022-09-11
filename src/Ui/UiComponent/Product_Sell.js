import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { DisSellPage, SellData } from "../../atoms/State";

const Product_Sell = ({ ...rest }) => {
  const [sellData, setSellData] = useRecoilState(SellData);
  const [disSellPage, setDisSellPage] = useRecoilState(DisSellPage);
  const handleDis = () => {
    return +rest.num + (disSellPage - 1) * 8;
  };
  return (
    <div className="itemBox">
      <img src={sellData[handleDis()].img} />
      <div className="itemText">
        <h5>{sellData[handleDis()].productName}</h5>
        <p>
          {Math.floor(
            100 -
              (sellData[handleDis()].sellPrice /
                sellData[handleDis()].salePrice) *
                100
          )}
          %{" "}
          <span>
            {sellData[handleDis()].salePrice
              .toString()
              .split("")
              .reverse()
              .map((num, index) => {
                if (sellData[handleDis()].salePrice.length === index + 1)
                  return num;
                return (index + 1) % 3 === 0 ? "," + num : num;
              })
              .reverse()}
          </span>
        </p>
        <strong>
          {sellData[handleDis()].sellPrice
            .split("")
            .reverse()
            .map((num, index) => {
              if (sellData[handleDis()].sellPrice.length === index + 1)
                return num;
              return (index + 1) % 3 === 0 ? "," + num : num;
            })
            .reverse()}
          원
        </strong>
      </div>
    </div>
  );
};

export default Product_Sell;
