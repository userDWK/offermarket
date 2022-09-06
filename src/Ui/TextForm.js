import React from "react";
import styled from "styled-components";

const TextDiv = styled.div`
  width: 100%;
  height: 2.25rem;
  margin: 3.5rem auto 0;
`;
const TextBox = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(50, 50, 50, 0.5);
  padding-left: 1rem;
  background: none;
  border-radius: 4px;
`;
const TextLabel = styled.label`
  display: block;
  height: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #111;
  opacity: 0.8;
`;

function TextForm(props) {
  return (
    <TextDiv>
      <TextLabel htmlFor={props.id}>{`${props.text}`}</TextLabel>
      <TextBox {...props}></TextBox>
    </TextDiv>
  );
}

export default TextForm;
