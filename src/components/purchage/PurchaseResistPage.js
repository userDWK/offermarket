import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  SellItem,
  UserObj,
  PurchaseItem,
  Today,
  IsResisted,
  HandleTime,
} from "../../atoms/State";
import { dbService, storageService } from "../../fbase";
import firebase from "firebase/compat/app";
import PurchaseResist from "./PurchaseResist";

function PurchaseResistPage() {
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [productImg, setProductImg] = useState("");
  const [purchaseItem, setPurchaseItem] = useRecoilState(PurchaseItem);
  const [today, setToday] = useRecoilState(Today);
  const [isResisted, setIsResisted] = useRecoilState(IsResisted);
  const [handleTime, setHandleTime] = useRecoilState(HandleTime);
  const navigate = useNavigate();

  const handleProduct = async (e) => {
    e.preventDefault();
    if (
      !purchaseItem.productName ||
      !purchaseItem.purchasePrice ||
      !productImg
    ) {
      return console.error("모든 항목을 입력하십시오");
    }
    setHandleTime((prev) => !prev);
    const blob = await resizeImg();
    const photoName = `images/product/purchase/${Date.now()}.jpeg`;
    const imageRef = storageService.ref().child(photoName);
    const uploadTask = imageRef.put(blob, {
      contentType: "image/jpeg",
    });
    uploadTask.on(
      "upload",
      (snapshot) => {
        let progress = (snapshot.totalBytes - snapshot.bytesTransferred) * 100;
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

          await dbService.collection("purchase").doc(today).set({
            category: purchaseItem.category,
            uid: userObj.uid,
            productName: purchaseItem.productName,
            purchasePrice: purchaseItem.purchasePrice,
            img: downloadURL,
            resistDate: today,
          });

          await dbService
            .collection("users")
            .doc(userObj.uid)
            .update({
              purchaseItems: firebase.firestore.FieldValue.arrayUnion({
                category: purchaseItem.category,
                productName: purchaseItem.productName,
                purchasePrice: purchaseItem.purchasePrice,
                img: downloadURL,
                resistDate: today,
              }),
            });

          setPurchaseItem({
            productName: "",
            purchasePrice: 0,
            img: "",
          });
          setIsResisted((prev) => !prev);
        } catch (e) {
          console.error("에러가 발생 하였습니다", e);
        }
      }
    );
    navigate(-1);
  };

  const resizeImg = async () => {
    const canvas = document.getElementById("canvas");
    canvas.width = "250";
    canvas.height = "250";
    const ctx = canvas.getContext("2d");
    const img = await createImg();
    const scale = Math.min(
      canvas.width / img.width,
      canvas.height / img.height
    );
    let x = canvas.width / 2 - (img.width / 2) * scale;
    let y = canvas.height / 2 - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      });
    });
  };

  const createImg = () => {
    const img = new Image();
    img.src = productImg;
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
    });
  };
  return (
    <div className="tradeResist">
      <PurchaseResist
        handleProduct={handleProduct}
        productImg={productImg}
        setProductImg={setProductImg}
      />
    </div>
  );
}

export default PurchaseResistPage;
