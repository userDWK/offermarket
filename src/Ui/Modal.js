import React from "react";
import styled, { css } from "styled-components";
import { ReactDOM } from "react";
import { useRecoilState } from "recoil";
import { IsModal } from "../atoms/State";
import Button from "./Button";
import { Link } from "react-router-dom";
const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
  opacity : 0;
  transition : opacity 0.4s ease-in-out; !important;
  pointer-events : none;

  ${(props) =>
    props.show &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

const ModalForm = styled.div`
  position: fixed;
  top: 1%;
  left: 50%;
  transform: translate(-50%);
  width: 40rem;
  height: 14rem;
  background: rgba(255, 255, 255, 1);
  z-index: 101;
  border: 1px solid black;
  border-radius: 10px;

  span {
    position: absolute;
    top: 20%;
    left: 10%;
    margin-right: 10%;
    line-height: 160%;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .close {
    cursor: pointer;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    width: 5rem;
    height: 3rem;
    z-index: 102;
    color: black;
    background: rgba(50, 50, 50, 0.2);
    border: 1px solid rgba(20, 20, 20, 0.4);
    border-radius: 3px;
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    line-height: 210%;
    &:hover {
      background: rgba(100, 150, 255, 1);
    }
  }
  .login {
    right: 8rem;
    width: 13rem;
  }
  ${(props) =>
    props.login === undefined &&
    css`
      .login {
        display: none;
      }
    `}
  overflow: hidden;
`;

const Modal = (props) => {
  return (
    <ModalBox show={props.show}>
      <ModalForm login={props.login}>
        {props.children}
        <span>
          {props.type} : {props.text}
        </span>
        <div className="close" onClick={props.close}>
          닫기
        </div>
        <Link to="/login">
          <div className="close login" onClick={props.close}>
            로그인 페이지 이동
          </div>
        </Link>
      </ModalForm>
    </ModalBox>
  );
};

export default Modal;
