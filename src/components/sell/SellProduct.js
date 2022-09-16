import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { SelectProduct } from "../../atoms/State";
import Button from "../../Ui/Button";
import FormBox from "../../Ui/FormBox";

const SellProduct = () => {
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
            <p>
              {Math.floor(
                100 - (selectProduct.sellPrice / selectProduct.salePrice) * 100
              )}
              %{" "}
              <span>
                {parseInt(selectProduct.salePrice).toLocaleString()}원
              </span>
            </p>
            <strong>
              {parseInt(selectProduct.sellPrice).toLocaleString()}원
            </strong>
          </div>
          <hr />
          <div className="shipBox">
            <p>배송비 : {selectProduct.parcelPrice}</p>
          </div>
          <hr />
          <div className="tradeBox">
            <strong>판매자 : {selectProduct.seller}</strong>
            <p>택배사 : {selectProduct.courier}</p>
          </div>
          <hr />
          <div className="etcBox">
            <strong>
              기타 상세 정보 : <br />
              <br /> {selectProduct.etc}
            </strong>
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

export default SellProduct;
