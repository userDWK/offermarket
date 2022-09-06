import React from "react";
import MainHeader from "../components/Main/MainHeader";
import FormBox from "../Ui/FormBox";
import Selector from "../Ui/Selector";
import TextForm from "../Ui/TextForm";

function PurchaseResistPage() {
  return (
    <div className="tradeResist">
      <FormBox className="trade">
        <div className="selectBox">
          <span>카테고리 선택 : </span>
          <Selector />
        </div>
        <div className="productNameBox">
          <TextForm
            type="text"
            id="productName"
            name="productName"
            placeholder="상품명"
            text="검색 시, 노출할 상품명을 입력하세요."
          />
        </div>
      </FormBox>
    </div>
  );
}

export default PurchaseResistPage;
