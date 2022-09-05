import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../fbase";
import firebase from "firebase/compat/app";
import FormBox from "../../Ui/FormBox";
import TextForm from "../../Ui/TextForm";
import Button from "../../Ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

function LoginMain({ isLoggedIn }) {
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
          />
          <TextForm
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleText}
          />
          <Button type="submit" login>
            로그인
          </Button>
        </form>
        <hr />
        <div className="formFootBox">
          <div className="helpBox">
            <p>
              <Link to="find">find account</Link>
            </p>
            <p>
              <Link to="create">create account</Link>
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
