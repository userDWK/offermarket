import React from "react";
import styled, { css } from "styled-components";

const FormDiv = styled.div`
  width: 25rem;
  height: 32rem;
  margin: 5rem auto;
  border: 2px solid rgba(50, 50, 50, 0.2);
  border-radius: 3px;
  padding: 0.5rem 2rem 2rem;
  position: relative;

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
    margin-top: 2.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.35rem 0.25rem;
    border-top: 1px solid rgba(50, 50, 50, 0.2);

    .socialLogin {
      svg {
        font-size: 1.75rem;
        margin: 0 0.35rem;
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  ${(props) =>
    props.className === "trade" &&
    css`
      width: 35rem;
      height: 65rem;

      .productPrice {
        width: 100%;
        div {
          box-sizing: border-box;
          display : inline-block;
          width : 46%;
        }
        }
        label {
          width : 100%;
        }
        #salePrice {
        margin-right : 2%;
        }
        #sellPrice {
          
          margin-left : 16.5%;
        }
      }
      

      .productImg {
       
        figure {
          text-align: center;
          margin-top: 2rem;
       
          img {
            min-width: 12rem;
            max-width: 15rem;
            min-height: 12rem;
            max-height: 15rem;
          }
        }
      }

      .selectBox {
        select {
          width: 100%;
          padding: 1rem 0;
        }
      }
    `}
  ${(props) =>
    props.className === "find" &&
    css`
      height: 20rem;
    `}

  ${(props) =>
    props.className === "create" &&
    css`
      height: 57rem;
    `}

    ${(props) =>
    props.className === "profile" &&
    css`
      height: 43rem;
      p {
        font-size: 1.25rem;
        margin: 2.5rem 0;
      }
      button:nth-child(4) {
        width: 100%;
      }
    `}
`;

function FormBox(props) {
  return <FormDiv className={props.className}>{props.children}</FormDiv>;
}

export default FormBox;
