import React, { useCallback, useEffect, useState } from "react";
import FormBox from "../../../Ui/FormBox";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SelectProduct } from "../../../atoms/State";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import SellCart from "./SellCart";
import PurchaseCart from "./PurchaseCart";

const Cart = () => {
  const [purchaseItems, setPurchaseItems] = useState(null);
  const [sellItems, setSellItems] = useState(null);
  const [selectProduct, setSelectProduct] = useRecoilState(SelectProduct);
  const [sellCnt, setSellCnt] = useState([]);
  const [purchaseCnt, setPurchaseCnt] = useState([]);
  const [toggle, setToggle] = useState(false);

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
      localStorage.setItem("sellCart", JSON.stringify(items));
    } else {
      const items = [...purchaseItems].filter((item, i) => parseInt(idx) !== i);
      setPurchaseItems(items);
      localStorage.setItem("purchaseCart", JSON.stringify(items));
    }
  };

  const handleCnt = (e) => {
    const {
      currentTarget: { name, className, value },
    } = e;

    const [key, idx] = className.split("_");

    console.log(key, idx, value);
    // setToggle((prev) => !prev);

    if (name === "sell") {
      if (key === "+") {
        setSellItems((prev) => {
          console.log(prev[idx].cnt);
          if (prev[idx].cnt < 100) prev[idx].cnt = +prev[idx].cnt + 1;
          return prev;
        });
      } else if (key === "-") {
        setSellItems((prev) => {
          console.log(prev);
          if (prev[idx].cnt > 1) prev[idx].cnt = +prev[idx].cnt - 1;
          return prev;
        });
      } else {
        setSellItems((prev) => {
          prev[idx].cnt = +value;
          return prev;
        });
      }
    }
  };

  useEffect(() => {
    const s = JSON.parse(localStorage.getItem("sellCart"));
    const p = JSON.parse(localStorage.getItem("purchaseCart"));
    setSellItems(s);
    setPurchaseItems(p);
    setSellCnt(s.map((item, idx) => item.cnt));
    setPurchaseCnt(p.map((item, idx) => item.cnt));
  }, []);

  return (
    <FormBox className="interest">
      <h2>장바구니</h2>
      <hr />
      <div className="interestBox cart">
        <h3>판매 상품</h3>
        {sellItems &&
          sellItems.map((item, idx) => {
            return (
              <SellCart
                item={item}
                idx={idx}
                handleCnt={handleCnt}
                handleSelect={handleSelect}
                delProduct={delProduct}
                sellItems={sellItems}
              />
            );
          })}
      </div>
      <div className="interestBox">
        <h3>구매 상품</h3>
        {purchaseItems &&
          purchaseItems.map((item, idx) => {
            return (
              <PurchaseCart
                item={item}
                idx={idx}
                handleSelect={handleSelect}
                delProduct={delProduct}
              />
            );
          })}
      </div>
    </FormBox>
  );
};

export default Cart;
