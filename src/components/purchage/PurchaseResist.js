import { useState } from "react";
import { useRecoilState } from "recoil";
import { PurchaseItem, SellItem, UserObj } from "../../atoms/State";
import Button from "../../Ui/Button";
import FormBox from "../../Ui/FormBox";
import ProductInformation from "../../Ui/ProductInformation";
import Selector from "../../Ui/Selector";
import TextForm from "../../Ui/TextForm";
import empty from "../../images/productImg/empty.png";

const PurchaseResist = ({ handleProduct, productImg, setProductImg }) => {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [purchaseItem, setPurchaseItem] = useRecoilState(PurchaseItem);

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
    setPurchaseItem({
      ...purchaseItem,
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
              id="purchasePrice"
              name="purchasePrice"
              placeholder="희망 구매가"
              text="희망 구매가"
            />
          </div>
          <div className="productImg">
            <TextForm
              type="file"
              onChange={handleImg}
              id="productImage"
              name="productImage"
              text="구매 상품 사진"
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
            상품 구매 등록
          </Button>
        </form>
      </FormBox>
    </>
  );
};

export default PurchaseResist;
