import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../fbase";
import firebase from "firebase/compat/app";
import FormBox from "../../Ui/FormBox";
import TextForm from "../../Ui/TextForm";
import Button from "../../Ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

function CreateMain({ isLoggedIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
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
      navigate("/");
    } catch (error) {
      setError(error);
      console.error("로그인 에러", error);
    }
  };
  return (
    <>
      <FormBox create className="create">
        <h3>Create Account</h3>
        <form onSubmit={handleLogin}>
          <TextForm
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="이름"
            onChange={handleText}
          />
          <TextForm
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="이메일"
            onChange={handleText}
          />
          <TextForm
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleText}
          />
          <TextForm
            type="number"
            id="phone"
            name="phone"
            value={phone}
            placeholder="휴대폰 번호 (-생략)"
            onChange={handleText}
          />
          <TextForm
            type="text"
            id="address"
            name="address"
            value={address}
            placeholder="주소"
            onChange={handleText}
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
