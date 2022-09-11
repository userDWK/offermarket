import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService, dbService } from "../../../fbase";
import FormBox from "../../../Ui/FormBox";
import TextForm from "../../../Ui/TextForm";
import Button from "../../../Ui/Button";
import { useRecoilState } from "recoil";
import { IsLoggedIn, IsModal, Message, UserObj } from "../../../atoms/State";
import Modal from "../../../Ui/Modal";
function ProfileMain() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  const [message, SetMessage] = useRecoilState(Message);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [address, setAddress] = useState(userObj.address);
  const [isModal, setIsModal] = useRecoilState(IsModal);

  const handleText = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "address") setAddress(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!address) {
      SetMessage({
        type: "Error",
        message: "모든 항목을 입력해 주세요.",
      });
      setIsModal(true);
      return;
    }
    try {
      await dbService.collection("users").doc(userObj.uid).update({
        address: address,
      });

      setAddress("");
    } catch (error) {
      SetMessage({
        type: "Error",
        message: error,
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
        close={() => {
          setIsModal(false);
        }}
      ></Modal>
      <FormBox className="profile">
        <h3>Modify information</h3>
        <form onSubmit={handleLogin}>
          <p>
            {" "}
            이름 <br />
            <strong>{userObj.name}</strong>
          </p>
          <p>
            {" "}
            이메일 <br /> <strong> {userObj.email}</strong>
          </p>
          <p>
            {" "}
            연락처 <br /> <strong>{userObj.phone} </strong>
          </p>
          <Button>비밀번호 변경(이메일 전송)</Button>
          <TextForm
            type="text"
            id="address"
            name="address"
            value={address}
            placeholder="주소"
            onChange={handleText}
            text="변경할 배송지를 입력하세요"
          />
          <Button type="submit" resist>
            수정하기
          </Button>
        </form>
      </FormBox>
    </>
  );
}

export default ProfileMain;
