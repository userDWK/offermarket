import React from "react";
import { useRecoilState } from "recoil";
import { DisPurchasePage, PurchaseData, UserObj } from "../../atoms/State";

const Product_Purchase = ({ handleDis }, { ...rest }) => {
  const [purchaseData, setPurchaseData] = useRecoilState(PurchaseData);
  const [disPurchasePage, setDisPurchasePage] = useRecoilState(DisPurchasePage);
  const [userObj, setUserObj] = useRecoilState(UserObj);

  return (
    <div className="itemBox">
      {purchaseData.length && (
        <>
          <img src={purchaseData[handleDis()].img} />
          <div className="itemText">
            <h5>{purchaseData[handleDis()].productName}</h5>
            <strong>
              {parseInt(
                purchaseData[handleDis()].purchasePrice
              ).toLocaleString()}
              원
            </strong>
          </div>
        </>
      )}
    </div>
  );
};

export default Product_Purchase;
