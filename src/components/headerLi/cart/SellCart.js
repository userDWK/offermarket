import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const SellCart = ({
  item,
  idx,
  handleCnt,
  handleSelect,
  delProduct,
  sellItems,
}) => {
  return (
    <div key={uuidv4()}>
      <button className={`sell_${idx}`} onClick={delProduct}>
        삭제
      </button>
      <img src={item.img} alt="" />
      <Link to={`/sell/product/uid=${item.uid}/date=${item.resistDate}`}>
        <p className={`sell_${idx}`} onClick={handleSelect}>
          {item.productName} <br />
          <br />
          <span>
            선택 상품 : {item.bundle.capacity} {item.bundle.amount}{" "}
            {item.bundle.price}.{" "}
          </span>
        </p>
      </Link>
      <div className="cntBox">
        <button className={`+_${idx}`} onClick={handleCnt} name="sell">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <input
          type="number"
          className={`num_${idx}`}
          onChange={handleCnt}
          value={sellItems[idx].cnt}
          name="sell"
        />
        <button className={`-_${idx}`} onClick={handleCnt} name="sell">
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
      <strong>{parseInt(item.sellPrice).toLocaleString()}원</strong>
    </div>
  );
};

export default SellCart;
