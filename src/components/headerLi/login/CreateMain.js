import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService, dbService } from "../../../fbase";
import FormBox from "../../../Ui/FormBox";
import TextForm from "../../../Ui/TextForm";
import Button from "../../../Ui/Button";
import { useRecoilState } from "recoil";
import { IsLoggedIn, UserObj } from "../../../atoms/State";
function CreateMain() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const handleText = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "phone") setPhone(value);
    else if (name === "address") setAddress(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let data;
      data = await authService.createUserWithEmailAndPassword(email, password);
      const userInformation = {
        name,
        email,
        password,
        phone,
        address,
        uid: authService.currentUser.uid,
      };
      await dbService.collection("users").add(userInformation);
      navigate("/");
    } catch (error) {
      setError(error);
      console.error("로그인 에러", error);
    }
  };
  return (
    <>
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
          <TextForm
            type="text"
            id="address"
            name="address"
            value={address}
            placeholder="주소"
            onChange={handleText}
            text="배송을 위한 주소를 입력하세요."
          />
          <Button type="submit" login>
            회원가입
          </Button>
        </form>
      </FormBox>
    </>
  );
}

export default CreateMain;
