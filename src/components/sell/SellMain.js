import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from "../../Ui/Button";
import ProductCon from "../../Ui/ProductCon";
import Products from "../Products";
import { IsLoggedIn, IsModal, UserObj } from "../../atoms/State";
import Modal from "../../Ui/Modal";
const SellMain = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  const [isModal, setIsModal] = useRecoilState(IsModal);

  return (
    <>
      <Modal
        show={isModal}
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
