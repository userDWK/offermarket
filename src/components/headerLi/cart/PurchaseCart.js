import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const PurchaseCart = ({ item, idx, handleSelect, delProduct }) => {
  return (
    <div key={uuidv4()}>
      <button className={`purchase_${idx}`} onClick={delProduct}>
        삭제
      </button>
      <img src={item.img} alt="" />
      <Link to={`/purchase/product/uid=${item.uid}/date=${item.resistDate}`}>
        <p className={`purchase_${idx}`} onClick={handleSelect}>
          {item.productName}
        </p>
      </Link>
      <strong>{parseInt(item.purchasePrice).toLocaleString()}원</strong>
    </div>
  );
};

export default PurchaseCart;
