import React, { useState } from "react";
import FormBox from "../../../Ui/FormBox";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SelectProduct } from "../../../atoms/State";

const Interest = () => {
  const [purchaseItems, setPurchaseItems] = useState(
    JSON.parse(localStorage.getItem("purchaseInterest"))
  );
  const [sellItems, setSellItems] = useState(
    JSON.parse(localStorage.getItem("sellInterest"))
  );
  const [selectProduct, setSelectProduct] = useRecoilState(SelectProduct);

  const handleSelect = (e) => {
    const [key, idx] = e.target.className.split("_");

    if (key === "sell") setSelectProduct(sellItems[idx]);
    else setSelectProduct(purchaseItems[idx]);
  };

  const delProduct = (e) => {
    e.preventDefault();

    const [key, idx] = e.target.className.split("_");
    if (key === "sell") {
      const items = [...sellItems].filter((item, i) => parseInt(idx) !== i);
      setSellItems(items);
      localStorage.setItem("sellInterest", JSON.stringify(items));
    } else {
      const items = [...purchaseItems].filter((item, i) => parseInt(idx) !== i);
      setPurchaseItems(items);
      localStorage.setItem("purchaseInterest", JSON.stringify(items));
    }
  };

  return (
    <FormBox className="interest">
      <h2>관심 상품</h2>
      <hr />
      <div className="interestBox">
        <h3>판매 상품</h3>
        {sellItems &&
          sellItems.map((item, idx) => {
            return (
              <div key={uuidv4()}>
                <button className={`sell_${idx}`} onClick={delProduct}>
                  삭제
                </button>
                <img src={item.img} alt="" />
                <Link
                  to={`/sell/product/uid=${item.uid}/date=${item.resistDate}`}
                >
                  <p className={`sell_${idx}`} onClick={handleSelect}>
                    {item.productName}
                  </p>
                </Link>
                <strong>{parseInt(item.sellPrice).toLocaleString()}원</strong>
              </div>
            );
          })}
      </div>
      <div className="interestBox">
        <h3>구매 상품</h3>
        {purchaseItems &&
          purchaseItems.map((item, idx) => {
            return (
              <div key={uuidv4()}>
                <button className={`purchase_${idx}`} onClick={delProduct}>
                  삭제
                </button>
                <img src={item.img} alt="" />
                <Link
                  to={`/purchase/product/uid=${item.uid}/date=${item.resistDate}`}
                >
                  <p className={`purchase_${idx}`} onClick={handleSelect}>
                    {item.productName}
                  </p>
                </Link>
                <strong>
                  {parseInt(item.purchasePrice).toLocaleString()}원
                </strong>
              </div>
            );
          })}
      </div>
    </FormBox>
  );
};

export default Interest;
