import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  width: 20rem;
`;

const Toast = styled.div`
  background: #fefefe;
  border: #ccc 1px solid;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin-top: 1rem;
  color: black;

  ${(props) =>
    props.type === "success" &&
    css`
      background-color: forestgreen;
      color: white;
    `}

  ${(props) =>
    props.type === "error" &&
    css`
      background-color: tomato;
      border: none;
      color: white;
    `}
`;

const Toaster = ({ toasts }) => {
  return (
    <Wrapper>
      {toasts.map((toast, i) => (
        <Toast className="toast" type={toast.type} key={i}>
          {toast.text}
        </Toast>
      ))}
    </Wrapper>
  );
};

export default Toaster;
