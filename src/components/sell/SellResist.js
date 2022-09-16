import React, { useState } from "react";
import Button from "../../Ui/Button";
import FormBox from "../../Ui/FormBox";
import Selector from "../../Ui/Selector";
import TextForm from "../../Ui/TextForm";
import empty from "../../images/productImg/empty.png";
import { SellItem } from "../../atoms/State";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

const SellResist = ({ handleProduct, productImg, setProductImg }) => {
  const [etcToggle, setEtcToggle] = useState(false);
  const [bundleToggle, setBundleToggle] = useState(false);
  const [sellItem, setSellItem] = useRecoilState(SellItem);
  const [bundleCnt, setBundleCnt] = useState(1);
  const [addArr, setAddArr] = useState([]);
  const handleImg = async (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setProductImg(e.target.result);
    };
  };

  const handleData = (e) => {
    setSellItem({
      ...sellItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggle = (e) => {
    e.preventDefault();
    const name = e.target.name;
    if (name === "etc") setEtcToggle((prev) => !prev);
    else if (name === "bundle") setBundleToggle((prev) => !prev);
  };

  const handleBundle = (e) => {
    e.preventDefault();
    const {
      target: { name, id, value },
    } = e;
    if (name === "bundleCnt") {
      return setBundleCnt(value);
    }
    let data = addArr;
    if (name === "capacity") {
      data[+id] = { ...data[+id], capicity: value };
    } else if (name === "amount") {
      data[+id] = { ...data[+id], amount: value };
    } else if (name === "price") {
      data[+id] = { ...data[+id], price: value };
    }
    setAddArr(data);
  };
  const addSelect = (e) => {
    e.preventDefault();
    const arr = new Array(parseInt(bundleCnt)).fill({
      capicity: "",
      amount: "",
      price: "",
    });
    setAddArr(arr);
  };

  return (
    <>
      <FormBox className="trade">
        <form onSubmit={handleProduct}>
          <div className="selectBox">
            <p>카테고리 선택 </p>
            <Selector onChange={handleData} />
          </div>
          <div className="productNameBox">
            <TextForm
              type="text"
              onChange={handleData}
              id="productName"
              name="productName"
              placeholder="상품명"
              text="검색 시, 노출할 상품명을 입력하세요."
            />
          </div>
          <div className="productPrice">
            <TextForm
              type="number"
              onChange={handleData}
              id="salePrice"
              name="salePrice"
              placeholder="할인 전 가격"
              text="할인 전 기준 판매가"
            />
            <TextForm
              type="number"
              onChange={handleData}
              id="sellPrice"
              name="sellPrice"
              placeholder="판매가"
              text="실제 판매가"
            />
          </div>
          <div className="productImg">
            <TextForm
              type="file"
              onChange={handleImg}
              id="productImage"
              name="productImage"
              text="판매 상품 사진"
              accept="image/*"
            />
            <figure>
              <img src={productImg ? productImg : empty} />

              <canvas id="canvas" />
            </figure>
          </div>
          <div className="informationBox">
            <Button
              product
              name="etc"
              onclick={handleToggle}
              bundleToggle={bundleToggle}
            >
              기타 상세 정보 <span>v</span>
            </Button>
            <FormBox className="etc" etcToggle={etcToggle}>
              <TextForm
                type="text"
                onChange={handleData}
                id="seller"
                name="seller"
                placeholder="판매자(사업소재지)"
                text="판매자(사업소재지) : "
              />
              <TextForm
                type="택배사"
                onChange={handleData}
                id="courier"
                name="courier"
                placeholder="택배사"
                text="택배사 : "
              />
              <TextForm
                type="number"
                onChange={handleData}
                id="parcelPrice"
                name="parcelPrice"
                placeholder="배송비"
                text="배송비 : "
              />
              <label htmlFor="etc">기타 정보</label>
              <textarea onChange={handleData} name="etc" id="etc" />
            </FormBox>
          </div>
          <div className="bundleBox">
            <div className="bundleCntBox">
              <TextForm
                type="number"
                value={bundleCnt}
                onChange={handleBundle}
                id="bundleCnt"
                name="bundleCnt"
                placeholder="상품 번들 수"
                text="추가 할 상품 번들의 수를 입력하세요."
              />
              <Button onclick={addSelect}>추가</Button>
            </div>
            <Button product name="bundle" onclick={handleToggle}>
              상품 묶음 판매 정보 <span>v</span>
            </Button>
            <FormBox className="bundle" bundleToggle={bundleToggle}>
              {addArr.map((select, index) => {
                return (
                  <div key={uuidv4()}>
                    <TextForm
                      type="number"
                      value={addArr[index]}
                      onChange={handleBundle}
                      id={index}
                      name="capacity"
                      placeholder="용량"
                      text="추가 할 상품 용량을 입력하세요."
                    />
                    <TextForm
                      type="number"
                      value={addArr[index]}
                      onChange={handleBundle}
                      id={index}
                      name="amount"
                      placeholder="개수"
                      text="추가 할 상품 개수를 입력하세요."
                    />
                    <TextForm
                      type="number"
                      value={addArr[index]}
                      onChange={handleBundle}
                      id={index}
                      name="price"
                      placeholder="가격"
                      text="추가 할 번들의 가격을 입력하세요."
                    />
                  </div>
                );
              })}
            </FormBox>
          </div>

          <Button type="submit" resist etcToggle={etcToggle}>
            상품 판매 등록
          </Button>
        </form>
      </FormBox>
    </>
  );
};

export default SellResist;
