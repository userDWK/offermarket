import React, { useEffect, useState } from "react";
import { dbService } from "../../../fbase";
import FormBox from "../../../Ui/FormBox";
import { useRecoilState } from "recoil";
import { IsLoggedIn, IsModal, Message, UserObj } from "../../../atoms/State";
import Modal from "../../../Ui/Modal";
import ProfileModify from "./ProfileModify";
import MyProduct from "./MyProduct";

function ProfileMain() {
  const [message, setMessage] = useRecoilState(Message);
  const [isModal, setIsModal] = useRecoilState(IsModal);

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
      <FormBox className="profile">
        <ProfileModify setIsModal={setIsModal} setMessage={setMessage} />
        <div className="product">
          <MyProduct />
          <hr />
        </div>
      </FormBox>
    </>
  );
}

export default ProfileMain;
