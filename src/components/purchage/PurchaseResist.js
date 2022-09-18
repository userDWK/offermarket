import { useState } from "react";
import { useRecoilState } from "recoil";
import { PurchaseItem, SellItem, UserObj } from "../../atoms/State";
import Button from "../../Ui/Button";
import FormBox from "../../Ui/FormBox";
import ProductInformation from "../../Ui/ProductInformation";
import Selector from "../../Ui/Selector";
import TextForm from "../../Ui/TextForm";
import empty from "../../images/productImg/empty.png";

const PurchaseResist = ({
  handleProduct,
  productImg,
  setProductImg,
  imgToggle,
}) => {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [purchaseItem, setPurchaseItem] = useRecoilState(PurchaseItem);
  const [etcToggle, setEtcToggle] = useState(false);
  const [bundleToggle, setBundleToggle] = useState(false);

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

  const handleToggle = (e) => {
    e.preventDefault();
    const name = e.target.name;
    if (name === "etc") setEtcToggle((prev) => !prev);
    else if (name === "bundle") setBundleToggle((prev) => !prev);
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
              placeholder="ex) 나이키 에어포스, 삼성 김치 냉장고"
              text="검색 시, 노출할 상품명을 입력하세요."
              maxLength="50"
              minLength="5"
            />
          </div>
          <div className="productPrice">
            <TextForm
              type="number"
              onChange={handleData}
              id="purchasePrice"
              name="purchasePrice"
              placeholder="ex) 20000, 300000"
              text="희망 구매가"
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
              text="구매 상품 사진"
              accept="image/*"
            />
            <figure>
              <img
                className={(imgToggle && "hide").toString()}
                src={productImg ? productImg : empty}
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
                id="residence"
                name="residence"
                placeholder="ex) 부산시, 제주시 등 "
                text="거주지 : "
                maxLength="50"
                minLength="3"
              />
              <TextForm
                type="text"
                onChange={handleData}
                id="paymentMethod"
                name="paymentMethod"
                placeholder="ex) 선불/착불"
                text="택배비 지불 방법 : "
                maxLength="15"
                minLength="2"
              />
              <TextForm
                type="text"
                onChange={handleData}
                id="capacity"
                name="capacity"
                placeholder="ex) 5L, 270mm"
                text="구매 용량/사이즈"
                maxLength="15"
                minLength="2"
              />
              <TextForm
                type="text"
                onChange={handleData}
                id="amount"
                name="amount"
                placeholder="ex) 3개, 5세트"
                text="구매 개수 : "
                maxLength="15"
                minLength="2"
              />
              <label htmlFor="etc">기타 정보 : </label>
              <textarea onChange={handleData} name="etc" id="etc" />
            </FormBox>
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
