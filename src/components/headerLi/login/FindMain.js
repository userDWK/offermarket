import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IsModal, Message } from "../../../atoms/State";
import { authService } from "../../../fbase";
import Button from "../../../Ui/Button";
import FormBox from "../../../Ui/FormBox";
import Modal from "../../../Ui/Modal";
import TextForm from "../../../Ui/TextForm";

const FindMain = () => {
  const [email, setEmail] = useState("");
  const [isModal, setIsModal] = useRecoilState(IsModal);
  const [message, SetMessage] = useRecoilState(Message);
  // const navigate = useNavigate();
  const handleText = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") setEmail(value);
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      let data;
      data = await authService.sendPasswordResetEmail(email);
    } catch (error) {
      SetMessage({
        type: "Error",
        message: "이메일이 존재하지 않습니다.",
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
        login
        close={() => {
          setIsModal(false);
        }}
      ></Modal>
      <FormBox className="find">
        <h3>Find Accound</h3>
        <form onSubmit={sendEmail}>
          <TextForm
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="이메일"
            onChange={handleText}
            text="이메일을 기입하세요"
            autoComplete="on"
          />
          <Button type="submit" resist>
            메일 전송
          </Button>
        </form>
      </FormBox>
    </>
  );
};

export default FindMain;
