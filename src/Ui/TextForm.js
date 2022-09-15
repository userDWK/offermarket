import React from "react";
import styled, { css } from "styled-components";

const TextDiv = styled.div`
  width: 100%;
  margin: 3.5rem auto 0;
`;

const TextBox = styled.input`
  width: 100%;
  height: 2.25rem;
  border: 1px solid rgba(50, 50, 50, 0.5);
  padding-left: 1rem;
  background: none;
  border-radius: 4px;

  ${(props) =>
    props.id === "productImage" &&
    css`
      margin-top: 1rem;
      width: 14.8rem;
      border: none;
      padding: 0;
    `}
`;

const TextLabel = styled.label`
  display: block;
  height: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #111;
  opacity: 0.8;
  text-align: left;

  ${(props) =>
    props.htmlFor === "productImage" &&
    css`
      margin-top: 3rem;
      width: 50%;
    `}

  ${(props) =>
    props.htmlFor === "sellPrice" &&
    css`
      margin-left: 16.5%;
    `}
`;

function TextForm(props) {
  return (
    <TextDiv>
      <TextLabel htmlFor={props.id}>{`${props.text}`}</TextLabel>
      <TextBox id={props.id} {...props}></TextBox>
    </TextDiv>
  );
}

export default TextForm;
