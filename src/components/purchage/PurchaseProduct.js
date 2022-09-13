import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { SelectProduct } from "../../atoms/State";
import Button from "../../Ui/Button";
import FormBox from "../../Ui/FormBox";

const PurchaseProduct = () => {
  const [selectProduct, setSelectProduct] = useRecoilState(SelectProduct);
  const [cnt, setCnt] = useState(1);
  const handleAmount = (e) => {
    setCnt((cnt) => ++cnt);
  };
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
            <Button interest>♡</Button>
          </div>
          <hr />
          <div className="priceBox">
            <strong>
              {parseInt(selectProduct.purchasePrice).toLocaleString()}원
            </strong>
          </div>
          <hr />
          <div className="shipBox">
            <p>배송비 : </p>
          </div>
          <hr />
          <div className="tradeBox">
            <strong>구매자 : </strong>
            <p>택배사 : </p>
          </div>
          <hr />
          <div className="purchaseBox">
            <input type="number" value={cnt} onChange={handleAmount} />
            <Button>관심상품 등록</Button>
            <Button>구매하기</Button>
          </div>
        </div>
      </div>
    </FormBox>
  );
};

export default PurchaseProduct;
