import React, { useState } from "react";
import FormBox from "../../../Ui/FormBox";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Interest = () => {
  const [purchaseItems, setPurchaseItems] = useState(
    JSON.parse(localStorage.getItem("purchaseInterest"))
  );
  const [sellItems, setSellItems] = useState(
    JSON.parse(localStorage.getItem("sellInterest"))
  );

  //   const movePage = (className) => {
  //     if (className === "sell")
  //       navigate(
  //         `/sell/product/uid=${userObj.uid}/date=${selectProduct.resistDate}`
  //       );
  //     else
  //       navigate(
  //         `/purchase/product/uid=${userObj.uid}/date=${selectProduct.resistDate}`
  //       );
  //   };

  return (
    <FormBox className="interest">
      <h2>관심 상품</h2>
      <hr />
      <div className="interestBox">
        <h3>판매 상품</h3>
        {sellItems.map((item, idx) => {
          return (
            <div key={uuidv4()}>
              <img src={item.img} alt="" />
              <Link
                to={`/sell/product/uid=${item.uid}/date=${item.resistDate}`}
              >
                <p>{item.productName}</p>
              </Link>
              <strong>{parseInt(item.sellPrice).toLocaleString()}원</strong>
            </div>
          );
        })}
      </div>
      <div className="interestBox">
        <h3>구매 상품</h3>
        {purchaseItems.map((item, idx) => {
          console.log(item);
          return (
            <div key={uuidv4()}>
              <img src={item.img} alt="" />
              <Link
                to={`/purchase/product/uid=${item.uid}/date=${item.resistDate}`}
              >
                <p>{item.productName}</p>
              </Link>
              <strong>{parseInt(item.purchasePrice).toLocaleString()}원</strong>
            </div>
          );
        })}
      </div>
    </FormBox>
  );
};

export default Interest;
