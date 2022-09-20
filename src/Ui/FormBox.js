import React from "react";
import styled, { css } from "styled-components";

const FormDiv = styled.div`
  width: 25rem;
  height: 100%;
  margin: 5rem auto;
  border: 2px solid rgba(50, 50, 50, 0.2);
  border-radius: 3px;
  padding: 0.5rem 2rem 1.5rem;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0.25rem 0;
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
      height : 100%;

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
        position : relative;
        input {
          opacity : 0;
        }
       label {
        position : absolute;
        top : -9%;
        width : 10rem;
        text-align : center;
        line-height : 0;
        padding : 1.5rem 0;
        border-radius : 10px;
        background : rgba(240,150,240,1);
        cursor : pointer;
        z-index : 100;

        &:hover {
          background : rgba(230,140,230,1);
          box-shadow : 0 0 4px rgba(100,100,150,1);
        }
       }
        figure {
          position : relative;
          text-align: center;
          margin-top: 2rem;
       
          img {
            min-width: 12rem;
            max-width: 15rem;
            min-height: 12rem;
            max-height: 15rem;
          }

          .hide {
            display : none;
          }
        }
        
      }

      .selectBox {
        select {
          width: 100%;
          padding: 1rem 0;
        }
      }
      .bundleBox {
        .bundleCntBox{
        display : flex;
        justify-content: space-between;
        margin : 0 0 5rem 1.5rem;
        
        align-items : center;
        width : 100%;

        input {
          width : 90%;
        }

        button {
          width : 20%;
          margin-top : 5rem;
         height :2.25rem; 
        }
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
      height: 100%;
    `}

    .postBox {
      position: fixed;
      top: 0;
      left: 50%;
      transform: translate(-50%);
      width: 100vw;
      min-height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity : 1;
      transition : opacity 0.4s ease-in-out; !important;
      z-index : 1;
      div {
        width: 50%;
        height : 100%;
        position: relative;
        top: 100%;
        left: 50%;
        transform: translate(-50%);

        .closeBtn {
          width : 2rem;
          height : 2rem;
          position : fixed;
          top : 90%;
          right : 20%;
          font-weight : bold;
          font-size : 1.25rem;
          background : white;
          border-radius : 50%;
          padding : 0.25rem 0.5rem;
          border : none;
          cursor : pointer;
          line-height : 90%;
        }

        .postmodal div {
          min-height: 40vh;
        }
      }
      
    }
    .hide {
      width : 0;
      height : 0;
      opacity : 0;
      // display : none;
    }
    ${(props) =>
      props.className === "profile" &&
      css`
        display: flex;
        width: 80%;
        height: 100%;
        border: none;

        .information {
          width: 23%;
          border-right: 1px solid rgba(50, 50, 50, 0.2);
          padding-right: 2rem;
          p {
            font-size: 1.25rem;
            margin: 2.5rem 0;
          }
          button {
            width: 100%;
          }
          .modify {
            position: relative;
            width: 100%;
          }
        }
        .product {
          margin-left: 10rem;
          flex: 1;
        }
      `}

    ${(props) =>
      props.className === "product" &&
      css`
      width: 60%;
      height: 100%;
      border : none;

      .productMain {
        display: flex;
        justify-content: center;

        .imgBox {
          img {
            width: 25rem;
            height: 30rem;
          }
        }
        .textBox {
          flex: 1;

          .textHeader {
            display: flex;
            justify-content: space-between;
            align-items : center;
            h2 {
              width : 90%;
            }
          }
          .priceBox {
            margin : 1.5rem 0;
            p {
              font-size: 1.25rem;
              span {
                position : relative;
                color: rgba(50, 50, 50, 0.6);
                &::before {
                  content : "";
                  display : block;
                  position : absolute;
                  top : 50%;
                  left : 0;
                  transform:translate(0,50%);
                  width : 100%;
                  height 1px;
                  background : rgba(50,50,50,0.6);
                }
              }
            }
            strong {
              font-size: 1.5rem;
              color: #ae0000;
              margin: 0.5rem 0 1.5rem;
              font-weight: bold;
            }
          }
          .shipBox {
            margin : 1.5rem 0;
          }
          .tradeBox {
            margin : 1.5rem 0;
          }
          .etcBox {
            margin : 2rem 0;
          }
          .bundleSelectBox {
            
          button {
            width : 100%;
            height : 100%;
            padding : 1.75rem 2rem 1rem;
            display : flex;
            justify-content : space-between;
            align-items : center;
            span {
              font-size : 0.9rem;
            }
            div p {
              font-size : 1.25rem;
              strong {
                font-size: 1.5rem;
                color: #ae0000;
                margin: 0.5rem 0 1.5rem;
                font-weight: bold;
            }
            }
            
          } 
          
          ul {
            width : 100%;
            padding : 0;
            margin-top : 0rem;
          }
          li {
            border : 1px solid rgba(200,200,200,1);
            cursor : pointer;
            padding : 1rem 2rem;
            font-size : 1.25rem;
            display : none;
            strong {
              font-size: 1.5rem;
              color: #ae0000;
              margin: 0.5rem 0 1.5rem;
              font-weight: bold;
            }
            &:hover {
              background : orange;
            }
          } 
          .display {
            display : block;
          }
          }
          
          
          .purchaseBox, .sellBox {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top : 3rem;
            
            button {
              margin-right : 0;
              width: 36%;
              height: 4rem;
              background: rgba(250, 250, 250, 0.1);
              border: solid 1px rgba(50, 150, 255, 1);
              color: rgba(50, 150, 255, 1);
              
              &:hover {
                background : rgba(50,150,50,0.7);
                color : white;
              }
             

              &:last-child {
                background: rgba(50, 150, 255, 1);
                color: white;

                &:hover {
                  background : rgba(50,100,255,1);
                }
              }
            }
          }
        }
      }
      .sellBox {
        input {
          width: 20%;
          height: 4rem;
          border: 1px solid rgba(50, 50, 50, 0.2);
          border-radius: 5px;
          font-size: 1.5rem;
          text-align: center;
        }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          opacity : 1;
          height : 3.8rem;
          width : 4rem;
          padding-right : 0.75rem;
          margin: 0;
          margin-right : -0.15rem;
          outline : 1px solid rgba(50,50,50,0.2);
          outline-right : 0;
        }
      }
      `}

      ${(props) =>
        props.className === "bundle" &&
        css`
      position: relative;
      left: -50%;
      width: 200%;
      height: 100%;
      margin-top: -2rem;
      background : rgba(225,250,255,1);
      border-radius : 1rem;
      z-index : 3;
      > div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top : 2rem;
        border : 1px solid rgba(20,20,20,0.2);

        > div {
          margin : 2rem 0 2rem;
          width 30%;
          input {
          background : white;
          }
        }
      }
    `}

      ${(props) =>
        props.className === "myProduct" &&
        css`
      width: 50rem;
      height: auto;
      border: none;
      
      table {
        width: 46rem;
        text-align: left;
        border: 1px solid rgba(20, 20, 20, 0.2);
        border-collapse: collapse;
        caption {
          font-size: 1.25rem;
          color: tomato;
          font-weight: bold;
          padding: 1rem 0;
          border: 1px solid rgba(230,230,230,1);
          border-bottom : 0;    
        }

        tr {
          position: relative;
          border: 1px solid rgba(50, 50, 50, 0.1);
        }

        th,
        td {
          padding: 0.25rem 1rem;
          &:first-child {
            width: 6rem;
            text-align: center;
            

            button {
              background : transparent;
              border : none;
              font-size : 1rem;
              font-weight : bold;
              color : transparent;
              cursor : pointer;

              
            &:hover {
              &:first-child {
                text-shadow : 0 0 2px rgba(255,50,50,1);
                color : red;
                }
                &:last-child {
                  text-shadow : 0 0 2px rgba(50,50,255,1);
                  color : blue;
                }
            } 
            }
          }
        
            &:nth-child(2) {
              width: 5rem;
              text-align: center;
            }
            &:nth-child(3) {
              width: 30rem;
              text-align: center;
              cursor : pointer;
              &:hover {
                color : blue;
                font-weight : bold;
              }
            }
            &:last-child {
              width: 7rem;
            }
          }
          th {
            text-align: center;
          }
        }
      }
    `}
    .etc {
    width: 100%;
    height: 100%;
    background: rgba(225, 250, 255, 1);
    border-radius: 1rem;
    z-index: 1;
    margin-top: -2rem;

    label {
      display: block;
      height: 1rem;
      margin: 3rem 0 0.5rem;
      font-size: 0.9rem;
      font-weight: bold;
      color: #111;
      opacity: 0.8;
      text-align: left;
    }
    input {
      background: white;
    }
    textarea {
      margin: 0;
      resize: none;
      width: 100%;
      height: 7rem;
    }
  }
  ${(props) =>
    props.etcToggle === false &&
    css`
      display: none;
    `}
  ${(props) =>
    props.bundleToggle === false &&
    css`
      display: none;
    `}

    ${(props) =>
      props.className === "interest" &&
      css`
        width: 60%;
        border: none;

        h2 {
          font-size: 1.75rem;
          margin-bottom: 4rem;
          text-align: center;
        }
        > hr {
          margin: 0;
        }
        .interestBox {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;

          h3 {
            width: 100%;
            margin: 0;
            padding: 2rem 3rem;
            color: #111;
            font-size: 1.1rem;
            font-weight: bold;
            border-bottom: 1px solid orange;
          }

          strong {
            display: inline-block;
            width: 15%;
            text-align: right;
          }

          div {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 4rem;
            border-bottom: 1px solid rgba(230, 230, 230, 1);

            button {
              background: rgba(250, 150, 100, 1);
              border: 0;
              font-size: 0.9rem;
              font-weight: bold;
              padding: 0.3rem 0.5rem;
              cursor: pointer;
              border-radius: 4px;
              &:hover {
                background: rgba(230, 50, 100, 1);
                box-shadow: 0 0 5px lightcoral;
              }
            }

            img {
              width: 10rem;
              height: 10rem;
              padding: 1rem 0;
              margin-left: 1rem;
            }
            a {
              flex: 1;
              margin-left: 4rem;
              color: #111;
              &:hover {
                color: red;
                font-weight: 600;
              }
              p {
                font-size: 1rem;
                padding: 1rem 0;
              }
            }
            .cntBox {
              width: 18rem;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 0;

              input {
                width: 3rem;
                height: 2rem;
                border: none;
                border-top: 1px solid rgba(220, 220, 220, 1);
                border-bottom: 1px solid rgba(220, 220, 220, 1);
                text-align: center;
                font-size: 0.9rem;
              }
              input[type="number"]::-webkit-outer-spin-button,
              input[type="number"]::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
              button {
                width: 2rem;
                height: 2rem;
                background: white;
                border: 1px solid rgba(220, 220, 220, 1);
                color: #111;
                font-size: 1.25rem;
                padding: 0;
                line-height: 160%;
                padding-left: 0.03rem;

                &:hover {
                  background: rgba(230, 230, 230, 1);
                  box-shadow: none;
                }
              }
            }
          }
          .cart {
            width: 10rem;
          }
        }
      `}
`;

function FormBox(props) {
  return (
    <FormDiv
      className={props.className}
      etcToggle={props.etcToggle}
      bundleToggle={props.bundleToggle}
    >
      {props.children}
    </FormDiv>
  );
}

export default FormBox;
