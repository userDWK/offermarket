import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SelectProduct } from "../../atoms/State";
import Button from "../../Ui/Button";
import FormBox from "../../Ui/FormBox";

const PurchaseProduct = () => {
  const [selectProduct, setSelectProduct] = useRecoilState(SelectProduct);
  const location = useLocation();

  const handleProduct = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let obj = localStorage.getItem(
      name === "cart" ? "purchaseCart" : "purchaseInterest"
    );
    obj = obj === null ? [] : JSON.parse(obj);
    obj = obj.filter((item, idx) => obj.num !== selectProduct.num);
    obj.push({
      productName: selectProduct.productName,
      purchasePrice: selectProduct.purchasePrice,
      num: selectProduct.num,
      img: selectProduct.img,
      uid: selectProduct.uid,
      resistDate: selectProduct.resistDate,
    });
    localStorage.setItem(
      name === "cart" ? "purchaseCart" : "purchaseInterest",
      JSON.stringify(obj)
    );
  };

  useEffect(() => {
    if (location.pathname.includes("purchase/product/uid=")) {
      selectProduct.num &&
        localStorage.setItem("product", JSON.stringify(selectProduct));

      localStorage.getItem("product") &&
        setSelectProduct(JSON.parse(localStorage.getItem("product")));
    }
  }, []);

  return (
    <FormBox className="product">
      <div className="productMain">
        <div className="imgBox">
          <figure>
            <img src={selectProduct.img} alt={selectProduct.productName} />
          </figure>
        </div>
        <div className="textBox">
          <div className="textHeader">
            <h2>{selectProduct.productName}</h2>
            <Button interest onClick={handleProduct} name="interest">
              <FontAwesomeIcon icon={faHeart} />{" "}
            </Button>
          </div>
          <hr />
          <div className="priceBox">
            <strong>
              {parseInt(selectProduct.purchasePrice).toLocaleString()}원
            </strong>
          </div>
          <hr />
          <div className="shipBox">
            <p>배송비 포함 여부 : {selectProduct.paymentMethod}</p>
          </div>
          <hr />
          <div className="tradeBox">
            <strong>구매자 거주지 : {selectProduct.residence}</strong>
          </div>
          <div className="bundleBox">
            <p>용량/사이즈 : {selectProduct.capacity}</p>
            <p>수량 : {selectProduct.amount}</p>
          </div>
          <div className="etcBox">
            <p>기타정보 : {selectProduct.etc}</p>
          </div>
          <hr />
          <div className="purchaseBox">
            <input type="number" />
            <Button onClick={handleProduct} name="cart">
              장바구니 등록
            </Button>
            <Button>판매하기</Button>
          </div>
        </div>
      </div>
    </FormBox>
  );
};

export default PurchaseProduct;
