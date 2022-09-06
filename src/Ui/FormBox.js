import React from "react";
import styled, { css } from "styled-components";

const FormDiv = styled.div`
  width: 25rem;
  height: 29rem;
  margin: 5rem auto;
  border: 2px solid rgba(50, 50, 50, 0.2);
  border-radius: 3px;
  padding: 0.5rem 2rem 2rem;

  h3 {
    font-size: 2rem;
    font-weight: 500;
    color: #111;
    margin: 1rem 0 -1.5rem;
    padding-left: 0.5rem;
  }

  .helpBox p {
    margin: 0.4rem 0 0.5rem;
    line-height: 100%;
    font-size: 1.15rem;
  }
  .helpBox a {
    color: #111;
    font-family: sans-serif;
  }

  .formFootBox {
    margin-top: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.25rem;

    .socialLogin {
      svg {
        font-size: 1.75rem;
        margin: 0 0.35rem;
        cursor: pointer;
      }
    }
  }
  ${(props) =>
    props.className === "trade" &&
    css`
      width: 35rem;
      height: 50rem;
    `}

  ${(props) =>
    props.className === "create" &&
    css`
      height: 41rem;
    `}
`;

function FormBox(props) {
  return <FormDiv className={props.className}>{props.children}</FormDiv>;
}

export default FormBox;
