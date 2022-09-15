import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import {
  PurchaseData,
  SellData,
  DisPurchasePage,
  DisSellPage,
  PageLine,
  UserObj,
  SelectProduct,
} from "../atoms/State";
import Product_Purchase from "./UiComponent/Product_Purchase";
import Product_Sell from "./UiComponent/Product_Sell";

const ProductForm = styled.div`
  position: relative;
  height: 30rem;
  width: 25rem;
  // border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.75rem;
  cursor: pointer;
  &:last-child {
    gap: 0;
  }
  &:hover {
    box-shadow: 2px 2px 6px #111;
  }
  .itemBox {
    img {
      position: relative;
      top: 1rem;
      left: 50%;
      transform: translate(-50%);
      height: 16rem;
      max-width: 25rem;
    }
  }
  .itemText {
    position: relative;
    margin-top: 3rem;
    left: 10%;
    h5 {
      font-size: 1.35rem;
      font-weight: 500;
      margin: 2rem 0 0.5rem;
    }
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
  .etcBox {
    margin : 5rem 0;
  }



`;

function Product({ ...rest }) {
  const [sellData, setSellData] = useRecoilState(SellData);
  const [purchaseData, setPurchaseData] = useRecoilState(PurchaseData);
  const [disSellPage, setDisSellPage] = useRecoilState(DisSellPage);
  const [disPurchasePage, setDisPurchasePage] = useRecoilState(DisPurchasePage);
  const [pageLine, setPageLine] = useRecoilState(PageLine);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [selectProduct, setSelectProduct] = useRecoilState(SelectProduct);
  const [pageUrl, setPageUrl] = useState("/");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setDisSellPage(1);
      setDisPurchasePage(1);
      setPageLine(1);
    }
    setPageUrl(
      rest.className === "sell"
        ? sellData.length > handleDis() &&
            `/sell/product/uid=${sellData[handleDis()].uid}/date=${
              sellData[handleDis()].resistDate
            }`
        : purchaseData.length > handleDis() &&
            `/purchase/product/uid=${purchaseData[handleDis()].uid}/date=${
              purchaseData[handleDis()].resistDate
            }`
    );
  }, [location]);
  const handleProduct = (e) => {
    if (e.currentTarget.className.includes("sell")) {
      setSelectProduct(sellData[handleDis()]);
    } else if (e.currentTarget.className.includes("purchase"))
      setSelectProduct(purchaseData[handleDis()]);
  };
  const handleDis = () => {
    return +rest.num + (disSellPage - 1) * 8;
  };
  return (
    <Link to={pageUrl}>
      <ProductForm className={rest.className} onClick={handleProduct}>
        {rest.className === "sell"
          ? +rest.num + 1 + (disSellPage - 1) * 8 <= sellData.length && (
              <Product_Sell handleDis={handleDis} {...rest} />
            )
          : +rest.num + 1 + (disPurchasePage - 1) * 8 <=
              purchaseData.length && (
              <Product_Purchase handleDis={handleDis} {...rest} />
            )}
      </ProductForm>{" "}
    </Link>
  );
}

export default Product;
