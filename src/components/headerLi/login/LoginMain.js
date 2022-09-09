import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRecoilState } from "recoil";
import { IsLoggedIn } from "../../../atoms/State";
import { authService } from "../../../fbase";
import TextForm from "../../../Ui/TextForm";
import FormBox from "../../../Ui/FormBox";
import Button from "../../../Ui/Button";

function LoginMain() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleText = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let data;
      data = await authService.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error);
      console.error("로그인 에러", error);
    }
  };
  const faceBookLogin = async (e) => {
    e.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    await authService.signInWithPopup(provider).then((result) => {
      let token = result.credential.accessToken;
      let user = result.user;
    });
  };

  const googleLogin = async (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider).then((result) => {
      let token = result.credential.accessToken;
      let user = result.user;
    });
  };
  return (
    <>
      <FormBox>
        <h3>Log In</h3>
        {isLoggedIn && navigate("/")}
        <form onSubmit={handleLogin}>
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
          <Button type="submit" resist>
            로그인
          </Button>
        </form>
        <div className="formFootBox">
          <div className="helpBox">
            <p>
              <Link to="find">계정 찾기</Link>
            </p>
            <p>
              <Link to="create">회원 가입</Link>
            </p>
          </div>
          <div className="socialLogin">
            <FontAwesomeIcon icon={faFacebook} onClick={faceBookLogin} />
            <FontAwesomeIcon icon={faGoogle} onClick={googleLogin} />
          </div>
        </div>
      </FormBox>
    </>
  );
}

export default LoginMain;
