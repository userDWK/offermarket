import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from "../../Ui/Button";
import ProductCon from "../../Ui/ProductCon";
import Products from "../Products";
import { IsLoggedIn, IsModal, Message, UserObj } from "../../atoms/State";
import Modal from "../../Ui/Modal";
const SellMain = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  const [isModal, setIsModal] = useRecoilState(IsModal);
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
          <Link to={isLoggedIn ? "/sell/resist" : ""}>
            <Button
              onClick={() => {
                !isLoggedIn && setIsModal(true);
              }}
            >
              판매 등록하기
            </Button>
          </Link>
        </div>
        <Products />
      </ProductCon>
    </>
  );
};

export default SellMain;
