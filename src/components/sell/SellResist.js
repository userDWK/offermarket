import React, { useCallback, useState } from "react";
import Button from "../../Ui/Button";
import FormBox from "../../Ui/FormBox";
import ProductInformation from "../../Ui/ProductInformation";
import Selector from "../../Ui/Selector";
import TextForm from "../../Ui/TextForm";
import empty from "../../images/productImg/empty.png";
import { dbService } from "../../fbase";
import { UserObj, SellItem, BlobData } from "../../atoms/State";
import { useRecoilState } from "recoil";

const SellResist = ({ handleProduct, productImg, setProductImg }) => {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [beforeSalePrice, setBeforeSalePrice] = useState(0);
  const [realSellPrice, setRealSellPrice] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [sellItem, setSellItem] = useRecoilState(SellItem);

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

  const handleInfo = (e) => {
    e.preventDefault();
    setToggle((prev) => !prev);
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
            <Button product onclick={handleInfo}>
              상품 상세 정보 <span>v</span>
              <ProductInformation toggle={toggle}></ProductInformation>
            </Button>
          </div>
          <Button type="submit" resist>
            상품 판매 등록
          </Button>
        </form>
      </FormBox>
    </>
  );
};

export default SellResist;
