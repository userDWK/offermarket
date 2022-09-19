import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IsLoggedIn, IsModal, Message } from "../../atoms/State";
import Button from "../../Ui/Button";
import Modal from "../../Ui/Modal";
import ProductCon from "../../Ui/ProductCon";
import Products from "../Products";

const PurchageMain = () => {
  const [isModal, setIsModal] = useRecoilState(IsModal);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  const [message, setMessage] = useRecoilState(Message);

  const handleModal = () => {
    if (!isLoggedIn) {
      setMessage({
        message: "로그인 후, 이용해 주세요.",
        type: "Error",
        page: "login",
      });
      setIsModal(true);
    }
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
      <ProductCon>
        <div className="productResist">
          <Link to={isLoggedIn ? "/purchase/resist" : ""}>
            <Button onclick={handleModal}>구매 등록하기</Button>
          </Link>
        </div>
        <Products />
      </ProductCon>
    </>
  );
};

export default PurchageMain;
