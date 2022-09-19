import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { UserObj } from "../../../atoms/State";
import { dbService } from "../../../fbase";
import Address from "../../../Ui/Address";
import Button from "../../../Ui/Button";
import TextForm from "../../../Ui/TextForm";

const ProfileModify = ({ setIsModal, setMessage }) => {
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [address, setAddress] = useState(userObj.address);
  const [nick, setNick] = useState(userObj.nick);
  const [toggleAdd, setToggleAdd] = useState(false);

  const handleText = (e) => {
    e.target.name === "nick" && setNick(e.target.value);
  };

  const handleModify = async (e) => {
    e.preventDefault();
    if (!nick) {
      setMessage({
        type: "Error",
        message: "모든 항목을 입력해 주세요.",
        page: undefined,
      });
      setIsModal(true);
      return;
    }

    try {
      await dbService.collection("users").doc(userObj.uid).update({
        address: address.address,
        zonecode: address.zonecode,
        nick: nick,
      });
      setMessage({
        type: "Success",
        message: "정보 변경에 성공하였습니다.",
        page: undefined,
      });
      setIsModal(true);
    } catch (error) {
      setMessage({
        type: "Error",
        message: error,
        page: undefined,
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
          minLength="2"
          maxLength="15"
        />
        <Address
          handleAddress={handleAddress}
          toggleAdd={toggleAdd}
          setAddress={setAddress}
          setToggleAdd={setToggleAdd}
        />
        <Button type="submit" resist className="modify">
          수정하기
        </Button>
      </form>
    </div>
  );
};

export default ProfileModify;
