import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService, dbService } from "../../../fbase";
import FormBox from "../../../Ui/FormBox";
import TextForm from "../../../Ui/TextForm";
import Button from "../../../Ui/Button";
import { useRecoilState } from "recoil";
import { IsLoggedIn, IsModal, Message, UserObj } from "../../../atoms/State";
import Modal from "../../../Ui/Modal";
import MySellProduct from "./MyProduct";
import MyProduct from "./MyProduct";
function ProfileMain() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  const [message, SetMessage] = useRecoilState(Message);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [address, setAddress] = useState(userObj.address);
  const [nick, setNick] = useState(userObj.nick);
  const [isModal, setIsModal] = useRecoilState(IsModal);

  const handleText = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "address") setAddress(value);
    else if (name === "nick") setNick(value);
  };

  const handleModify = async (e) => {
    e.preventDefault();
    if (!address || !nick) {
      SetMessage({
        type: "Error",
        message: "모든 항목을 입력해 주세요.",
      });
      setIsModal(true);
      return;
    }
    if (
      /^[0-9a-zA-Z가-힣]/g.test(nick) ||
      nick.length < 2 ||
      nick.length > 15
    ) {
      SetMessage({
        type: "Error",
        message: "닉네임은 2~15자리 영어,한글,숫자로 구성해주세요",
      });
      setIsModal(true);
      return;
    }
    try {
      await dbService.collection("users").doc(userObj.uid).update({
        address: address,
        nick: nick,
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
        <div className="information">
          <h3>Modify information</h3>
          <form onSubmit={handleModify}>
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
              id="nick"
              name="nick"
              value={nick}
              placeholder="닉네임"
              onChange={handleText}
              text="변경할 닉네임을 입력하세요"
            />
            <TextForm
              type="text"
              id="address"
              name="address"
              value={address}
              placeholder="주소"
              onChange={handleText}
              text="변경할 배송지를 입력하세요"
            />
            <Button type="submit" resist className="modify">
              수정하기
            </Button>
          </form>
        </div>
        <div className="product">
          <MyProduct />
          <hr />
        </div>
      </FormBox>
    </>
  );
}

export default ProfileMain;
