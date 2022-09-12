import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { DisSellPage, SellData } from "../../atoms/State";

const Product_Sell = ({ handleDis }, { ...rest }) => {
  const [sellData, setSellData] = useRecoilState(SellData);
  const [disSellPage, setDisSellPage] = useRecoilState(DisSellPage);
  return (
    <div className="itemBox">
      {sellData.length && (
        <>
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
                {parseInt(sellData[handleDis()].salePrice).toLocaleString()}
              </span>
            </p>
            <strong>
              {parseInt(sellData[handleDis()].sellPrice).toLocaleString()}원
            </strong>
          </div>
        </>
      )}
    </div>
  );
};

export default Product_Sell;
