import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { DisPurchasePage, DisSellPage } from "../atoms/State";

const PageBtn = styled.button`
  position: relative;
  width: 3rem;
  height: 3rem;
  background: none;
  border: none;
  border-radius: 3px;
  font-size: 1.35rem;
  font-weight: bold;
  line-height: 180%;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: red;
  }

  ${(props) =>
    props.id === "active" &&
    css`
      border: 1px solid rgba(100, 150, 255, 1);
      &:hover {
        color: cyan;
      }
    `}
  ${(props) => parseInt(props.page) / 10 && css``}
`;

const ProductPageBtn = (props) => {
  const [disSellPage, setDisSellPage] = useRecoilState(DisSellPage);
  const [disPurchasePage, setDisPurchasePage] = useRecoilState(DisPurchasePage);

  return (
    <PageBtn
      {...props}
      id={
        (props.name === "sell" ? +disSellPage : +disPurchasePage) ===
        props.value
          ? "active".toString()
          : undefined
      }
    >
      {props.value}
    </PageBtn>
  );
};

export default ProductPageBtn;
