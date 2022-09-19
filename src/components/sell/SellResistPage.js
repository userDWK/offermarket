import React, { useCallback, useState } from "react";
import { dbService, storageService } from "../../fbase";
import { useRecoilState } from "recoil";
import {
  HandleTime,
  IsModal,
  IsResisted,
  Message,
  SellData,
  SellItem,
  Today,
  UserObj,
} from "../../atoms/State";
import SellResist from "./SellResist";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Modal from "../../Ui/Modal";

function SellResistPage() {
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [productImg, setProductImg] = useState("");
  const [sellItem, setSellItem] = useRecoilState(SellItem);
  const [today, setToday] = useRecoilState(Today);
  const navigate = useNavigate();
  const [isResisted, setIsResisted] = useRecoilState(IsResisted);
  const [handleTime, setHandleTime] = useRecoilState(HandleTime);
  const [imgToggle, setImgToggle] = useState(false);
  const [isModal, setIsModal] = useRecoilState(IsModal);
  const [message, setMessage] = useRecoilState(Message);

  const handleProduct = async (e) => {
    e.preventDefault();
    if (
      !sellItem.productName ||
      !sellItem.salePrice ||
      !sellItem.sellPrice ||
      !sellItem.seller ||
      !sellItem.parcelPrice ||
      !sellItem.courier ||
      !productImg
    ) {
      setMessage({
        type: "error",
        message: "모든 항목을 입력해 주십시오",
        page: undefined,
      });
      return setIsModal(true);
    }

    for (let i = 0; i < sellItem.bundle.length; i++) {
      const item = sellItem.bundle[i];
      if (!item.capacity || !item.amount || !item.price)
        setMessage({
          type: "error",
          message: "모든 항목을 입력해 주십시오",
          page: undefined,
        });
      return setIsModal(true);
    }

    setHandleTime((prev) => !prev);
    const blob = await resizeImg();
    const photoName = `images/product/sell/${Date.now()}.jpeg`;
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
            setMessage({
              type: "error",
              message: "허가 되지 않은 경로 입니다",
              page: undefined,
            });
            setIsModal(true);
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
          const num = uuidv4();
          await dbService
            .collection("sell")
            .doc(today)
            .set({
              ...sellItem,
              uid: userObj.uid,
              img: downloadURL,
              resistDate: today,
              num,
            });

          await dbService
            .collection("users")
            .doc(userObj.uid)
            .update({
              sellItems: firebase.firestore.FieldValue.arrayUnion({
                ...sellItem,
                uid: userObj.uid,
                img: downloadURL,
                resistDate: today,
                num,
              }),
            });

          setSellItem({});
          setIsResisted((prev) => !prev);
          setImgToggle(false);
        } catch (e) {
          setMessage({
            type: "Error",
            message: "에러가 발생하였습니다.",
            page: undefined,
          });
          console.error(e);
          setIsModal(true);
        }
      }
    );
    navigate(-1);
  };

  const resizeImg = async () => {
    const canvas = document.getElementById("canvas");
    canvas.width = 250;
    canvas.height = 250;
    const ctx = canvas.getContext("2d");
    const img = await createImg();
    const scale = Math.min(
      canvas.width / img.width,
      canvas.height / img.height
    );
    let x = canvas.width / 2 - (img.width / 2) * scale;
    let y = canvas.height / 2 - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    setImgToggle(true);
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
    <>
      <Modal
        show={isModal}
        text={message.message}
        type={message.type}
        page={message.page}
        close={() => {
          setIsModal(false);
        }}
      ></Modal>
      <div className="tradeResist">
        <SellResist
          handleProduct={handleProduct}
          productImg={productImg}
          setProductImg={setProductImg}
          imgToggle={imgToggle}
        />
      </div>
    </>
  );
}

export default SellResistPage;
