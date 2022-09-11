import React from "react";
import { useRecoilState } from "recoil";
import { DisPurchasePage, PurchaseData } from "../../atoms/State";

const Product_Purchase = ({ ...rest }) => {
  const [purchaseData, setPurchaseData] = useRecoilState(PurchaseData);
  const [disPurchasePage, setDisPurchasePage] = useRecoilState(DisPurchasePage);
  const handleDis = () => {
    return +rest.num + (disPurchasePage - 1) * 8;
  };
  return (
    <div className="itemBox">
      <img src={purchaseData[handleDis()].img} />
      <div className="itemText">
        <h5>{purchaseData[handleDis()].productName}</h5>
        <strong>
          {purchaseData[handleDis()].purchasePrice
            .split("")
            .reverse()
            .map((num, index) => {
              if (purchaseData[handleDis()].purchasePrice.length === index + 1)
                return num;
              return (index + 1) % 3 === 0 ? "," + num : num;
            })
            .reverse()}
        </strong>
        원
      </div>
    </div>
  );
};

export default Product_Purchase;
