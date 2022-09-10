import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IsLoggedIn, IsModal } from "../../atoms/State";
import Button from "../../Ui/Button";
import Modal from "../../Ui/Modal";
import ProductCon from "../../Ui/ProductCon";
import Products from "../Products";

const PurchageMain = () => {
  const [isModal, setIsModal] = useRecoilState(IsModal);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
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
          <Link to={isLoggedIn ? "/purchase/resist" : ""}>
            <Button
              onclick={() => {
                !isLoggedIn && setIsModal(true);
              }}
            >
              구매 등록하기
            </Button>
          </Link>
        </div>
        <Products />
      </ProductCon>
    </>
  );
};

export default PurchageMain;
