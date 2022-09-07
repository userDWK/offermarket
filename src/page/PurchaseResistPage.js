import React, { useState } from "react";
import MainHeader from "../components/Main/MainHeader";
import Button from "../Ui/Button";
import FormBox from "../Ui/FormBox";
import ProductInformation from "../Ui/ProductInformation";
import Modal from "../Ui/ProductInformation";
import Selector from "../Ui/Selector";
import TextForm from "../Ui/TextForm";
import empty from "../images/productImg/empty.png";
import { storageService } from "../fbase";
import { useRecoilState } from "recoil";
import { UserObj } from "../atoms/State";

function PurchaseResistPage() {
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [toggle, setToggle] = useState(false);
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [beforeSalePrice, setBeforeSalePrice] = useState(0);
  const [realSellPrice, setRealSellPrice] = useState(0);
  const [productImg, setproductImg] = useState("");

  const handleInfo = (e) => {
    e.preventDefault();
    setToggle((prev) => !prev);
  };

  const handleData = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "productName") {
      setProductName(value);
    } else if (name === "salePrice") {
      setBeforeSalePrice(value);
    } else if (name === "sellPrice") {
      setRealSellPrice(value);
    }
  };

  const handleProduct = (e) => {
    e.preventDefault();
  };
  const handleImg = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setproductImg(e.target.result);
    };
    const blob = resizeImg(productImg);
    const photoName = `images/product/sell/${Date.now()}.jpeg`;
    const imageRef = storageService.ref().child(photoName);
    const uploadTask = imageRef.put(blob, {
      contentType: "image/jpeg",
    });
    console.log(photoName);
    uploadTask.on(
      "state_changed",
      ((snapshot) => {
        let progress = (snapshot.bytesTransferred - snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (e) => {
        switch (e.code) {
          case "storage/unauthorized":
            console.error("허가 되지 않은 경로 입니다");
            break;
          case "storage/unknown":
            console.error(e.serverResponse);
            break;
        }
      },
      async () => {
        try {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

          console.log("다운로드 URL : ", downloadURL);
        } catch (e) {
          console.error("에러가 발생 하였습니다", e);
        }
      })
    );
  };
  const resizeImg = async (photo) => {
    const canvas = document.getElementById("canvas");
    canvas.width = 250;
    canvas.height = 250;
    const ctx = canvas.getContext("2d");
    const img = await createImg(photo);

    const scale = Math.min(
      canvas.width / img.width,
      canvas.height / img.height
    );

    let x = canvas.width / 2 - (img.width / 2) * scale;
    let y = canvas.height / 2 - (img.height / 2) * scale;
    console.log(canvas.width / 2, (img.width / 2) * scale);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      });
    });
  };

  const createImg = (photo) => {
    const img = new Image();
    img.src = photo;
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
    });
  };
  return (
    <div className="tradeResist">
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
    </div>
  );
}

export default PurchaseResistPage;
