import React from "react";
import Post from "../components/Post";
import Button from "./Button";

const Address = ({ handleAddress, toggleAdd, setAddress, setToggleAdd }) => {
  return (
    <>
      <Button address onClick={handleAddress}>
        주소 선택
      </Button>
      {
        <div className={(toggleAdd ? "postBox" : "hide").toString()}>
          <div>
            <Post setAddress={setAddress} setToggleAdd={setToggleAdd} />
            <button className="closeBtn" onClick={handleAddress}>
              x
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default Address;
