import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService, dbService } from "../../../fbase";
import FormBox from "../../../Ui/FormBox";
import TextForm from "../../../Ui/TextForm";
import Button from "../../../Ui/Button";
import { useRecoilState } from "recoil";
import { IsLoggedIn, IsModal, Message, UserObj } from "../../../atoms/State";
import Modal from "../../../Ui/Modal";
import DaumPostcode from "react-daum-postcode";
import Post from "../../Post";
import Address from "../../../Ui/Address";
function CreateMain() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, SetMessage] = useRecoilState(Message);
  const navigate = useNavigate();
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [isModal, setIsModal] = useRecoilState(IsModal);
  const [toggleAdd, setToggleAdd] = useState(false);

  const handleText = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "checkPassword") setCheckPassword(value);
    else if (name === "phone") setPhone(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !password ||
      !checkPassword ||
      !phone ||
      !address.address
    ) {
      SetMessage({
        type: "Error",
        message: "모든 항목을 입력해 주세요.",
      });
      setIsModal(true);
      return;
    }
    if (/[^A-Za-z가-힣]/g.test(name) || name.length < 2) {
      SetMessage({
        type: "Error",
        message: "영어 또는 한글로 구성된 2글자 이상의 이름을 입력해 주십시오",
      });

      setIsModal(true);
      return;
    }
    if (
      !/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
        email
      )
    ) {
      SetMessage({
        type: "Error",
        message: "이메일 형식에 벗어납니다",
      });
      setIsModal(true);
      return;
    }
    if (password !== checkPassword) {
      SetMessage({
        type: "Error",
        message: "비밀번호가 일치하지 않습니다",
      });
      setIsModal(true);
      return;
    }
    if (
      !/[a-zA-Z]/g.test(password) ||
      !/[0-9]/g.test(password) ||
      !/[~!@\#$%<>^&*]/g.test(password) ||
      password.length < 8
    ) {
      SetMessage({
        type: "Error",
        message:
          "영문, 숫자, 특수문자를 포함한 8자리 이상의 비밀번호를 입력해 주십시오",
      });

      setIsModal(true);
      return;
    }
    if (!/(^\d{3})(\d{3,4})(\d{4}$)/.test(phone)) {
      SetMessage({
        type: "Error",
        message: "휴대폰 번호를 정확히 입력해 주십시오",
      });
      setIsModal(true);
      return;
    }
    try {
      let data;
      data = await authService.createUserWithEmailAndPassword(email, password);
      const userInformation = {
        name,
        email,
        password,
        phone,
        address: address.address,
        zonecode: address.zonecode,
        uid: authService.currentUser.uid,
      };
      await dbService
        .collection("users")
        .doc(userInformation.uid)
        .set({ ...userInformation, nick: userInformation.uid });

      navigate("/");
    } catch (error) {
      SetMessage({
        type: "Error",
        message: error,
      });
      setIsModal(true);
    }
  };

  const handleAddress = (e) => {
    e.preventDefault();
    if (e.target.className === "closeBtn") return setToggleAdd(false);
    setToggleAdd(true);
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
      <FormBox className="create">
        <h3>Create Account</h3>
        <form onSubmit={handleLogin}>
          <TextForm
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="이름"
            onChange={handleText}
            text="사용자 이름을 입력하세요."
          />
          <TextForm
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="이메일"
            onChange={handleText}
            text="로그인에 사용할 이메일을 입력하세요."
          />
          <TextForm
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleText}
            text="로그인에 사용할 비밀번호를 입력하세요."
            autoComplete="new-password"
          />
          <TextForm
            type="password"
            id="checkPassword"
            name="checkPassword"
            placeholder="비밀번호"
            onChange={handleText}
            text="로그인에 사용할 비밀번호를 입력하세요."
            autoComplete="new-password"
          />
          <TextForm
            type="number"
            id="phone"
            name="phone"
            value={phone}
            placeholder="휴대폰 번호 (-생략)"
            onChange={handleText}
            text="배송, 인증에 사용될 연락처를 입력하세요."
          />
          <Address
            handleAddress={handleAddress}
            toggleAdd={toggleAdd}
            setAddress={setAddress}
            setToggleAdd={setToggleAdd}
          />
          <Button type="submit" resist>
            회원가입
          </Button>
        </form>
      </FormBox>
    </>
  );
}

export default CreateMain;
