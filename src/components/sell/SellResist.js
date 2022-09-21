import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "../../Ui/Button";
import FormBox from "../../Ui/FormBox";
import Selector from "../../Ui/Selector";
import TextForm from "../../Ui/TextForm";
import empty from "../../images/productImg/empty.png";
import { SelectProduct, SellItem } from "../../atoms/State";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

const SellResist = ({
  handleProduct,
  productImg,
  setProductImg,
  imgToggle,
  location,
}) => {
  const [etcToggle, setEtcToggle] = useState(false);
  const [bundleToggle, setBundleToggle] = useState(false);
  const [sellItem, setSellItem] = useRecoilState(SellItem);
  const [bundleCnt, setBundleCnt] = useState(1);
  const [addArr, setAddArr] = useState([]);
  const [changedBundleCnt, setChangedBundleCnt] = useState(false);
  const item = useRef(null);
  const [selectProduct, setSelectProduct] = useRecoilState(SelectProduct);
  const bundle = useRef(null);

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
    item.current = {
      ...item.current,
      [e.target.name]: e.target.value,
    };
  };

  const handleToggle = (e) => {
    e.preventDefault();
    const name = e.target.name;
    if (name === "etc") {
      setEtcToggle((prev) => !prev);
    } else if (name === "bundle") {
      setBundleToggle((prev) => !prev);
    }
  };

  const handleBundle = (e) => {
    const {
      target: { id, value },
    } = e;

    if (id === "bundleCnt") {
      return setBundleCnt(value);
    }

    const [key, idx] = id.split("_");

    const newData = { ...bundle.current[idx] };
    newData[key] = value;
    bundle.current[idx] = newData;
    console.log(bundle.current);
  };

  const addSelect = (e) => {
    e.preventDefault();
    const arr = new Array(parseInt(bundleCnt)).fill(1).map((_, idx) => {
      if (selectProduct?.bundle) {
        if (selectProduct.bundle.length >= parseInt(bundleCnt)) {
          return selectProduct.bundle[idx];
        }
      }
      return {};
    });
    setAddArr(arr);
    bundle.current = { ...arr };
  };

  const addBundleData = (e) => {
    console.log(addArr);
    setSellItem({
      ...item.current,
      bundle: bundle.current,
    });
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
              defaultValue={location ? null : selectProduct.productName}
              onChange={handleData}
              id="productName"
              name="productName"
              placeholder="ex) 삼성전자 양문형 900L 냉장고"
              text="검색 시, 노출할 상품명을 입력하세요."
              maxLength="50"
              minLength="5"
            />
          </div>
          <div className="productPrice">
            <TextForm
              type="number"
              defaultValue={location ? null : selectProduct.salePrice}
              onChange={handleData}
              id="salePrice"
              name="salePrice"
              placeholder="ex) 15000, 35000"
              text="할인 전 기준 판매가"
              maxLength="15"
              minLength="2"
            />
            <TextForm
              type="number"
              defaultValue={location ? null : selectProduct.sellPrice}
              onChange={handleData}
              id="sellPrice"
              name="sellPrice"
              placeholder="ex) 30000, 2500"
              text="실제 판매가"
              maxLength="15"
              minLength="2"
            />
          </div>
          <div className="productImg">
            <TextForm
              type="file"
              onChange={handleImg}
              id="productImage"
              name="productImage"
              text="상품 사진 등록"
              accept="image/*"
            />
            <figure>
              <img
                className={(imgToggle && "hide").toString()}
                src={
                  productImg ? productImg : location ? empty : selectProduct.img
                }
              />
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
                defaultValue={location ? null : selectProduct.seller}
                placeholder="ex) 오퍼마켓 (부산시 동래구 수안동...)"
                text="판매자(사업장 소재지) : "
                maxLength="80"
                minLength="5"
              />
              <TextForm
                type="text"
                onChange={handleData}
                id="courier"
                name="courier"
                defaultValue={location ? null : selectProduct.courier}
                placeholder="ex) 우체국, 로젠, cj대한통운"
                text="택배사 : "
                maxLength="15"
                minLength="2"
              />
              <TextForm
                type="number"
                onChange={handleData}
                id="parcelPrice"
                name="parcelPrice"
                defaultValue={location ? null : selectProduct.parcelPrice}
                placeholder="ex) 3000, 무료"
                text="배송비 : "
                maxLength="15"
                minLength="2"
              />
              <label htmlFor="etc">기타 정보 : </label>
              <textarea
                onChange={handleData}
                name="etc"
                id="etc"
                defaultValue={location ? null : selectProduct.etc}
              />
            </FormBox>
          </div>
          <div className="bundleBox">
            <div className="bundleCntBox">
              <TextForm
                type="text"
                onChange={handleBundle}
                id="bundleCnt"
                defaultValue={location ? null : selectProduct.bundle.bundleCnt}
                placeholder="ex) 3, 15, 20"
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
                      type="text"
                      defaultValue={
                        // location
                        //   ? select.capacity
                        bundleCnt.length > index
                          ? bundle.current[index].capacity
                          : null
                      }
                      onChange={handleBundle}
                      id={`capacity_${index}`}
                      placeholder="ex) 150g, 2L"
                      text="용량/사이즈(단위 포함)를 입력하세요."
                      maxLength="15"
                      minLength="2"
                    />
                    <TextForm
                      type="text"
                      defaultValue={
                        // location
                        //   ? select.amount
                        bundleCnt.length > index
                          ? bundle.current[index].amount
                          : null
                      }
                      onChange={handleBundle}
                      id={`amount_${index}`}
                      placeholder="ex) 5세트, 10개, 15묶음"
                      text="상품 개수(단위 포함)를 입력하세요."
                      maxLength="15"
                      minLength="2"
                    />
                    <TextForm
                      type="number"
                      defaultValue={
                        // location
                        //   ? select.price
                        bundleCnt.length > index
                          ? bundle.current[index].price
                          : null
                      }
                      onChange={handleBundle}
                      id={`price_${index}`}
                      placeholder="ex) 3000, 50000"
                      text="판매가를 입력하세요."
                      maxLength="15"
                      minLength="2"
                    />
                  </div>
                );
              })}
            </FormBox>
          </div>

          <Button type="submit" resist onclick={addBundleData}>
            상품 판매 등록
          </Button>
        </form>
      </FormBox>
    </>
  );
};

export default SellResist;
