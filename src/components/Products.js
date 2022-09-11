import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  DisPurchasePage,
  DisSellPage,
  PurchaseData,
  SellData,
  UserObj,
} from "../atoms/State";
import Main from "../Ui/Main";
import Product from "../Ui/Product";
import ProductBox from "../Ui/ProductBox";
import ProductPageBtn from "../Ui/ProductPageBtn";
import Section from "../Ui/Section";

const Products = () => {
  const [sellData, setSellData] = useRecoilState(SellData);
  const [purchaseData, setPurchaseData] = useRecoilState(PurchaseData);
  const [pages, setPages] = useState(1);
  const [disSellPage, setDisSellPage] = useRecoilState(DisSellPage);
  const [disPurchasePage, setDisPurchasePage] = useRecoilState(DisPurchasePage);
  const [pageLine, setPageLine] = useState(1);
  const location = useLocation().pathname.slice(1);

  const handlePage = (e) => {
    e.preventDefault();
    const {
      target: { name, value },
    } = e;
    if (value === "<") {
      pages !== 1 && setPages((prev) => --prev);
    } else if (value === ">") {
      setPages((prev) => ++prev);
    } else {
      if (name === "sell") {
        setDisSellPage(value);
      } else if (name === "purchase") {
        setDisPurchasePage(value);
      }
    }
  };
  // console.log(pageLine);
  return (
    <div className="purchageMain">
      <Main>
        <Section>
          <div className="productBox product">
            <h2>최신 등록 상품</h2>
          </div>
          <ProductBox className="productPage">
            <Product
              className={location === "sell" ? "sell" : "purchase"}
              num="0"
            />
            <Product
              className={location === "sell" ? "sell" : "purchase"}
              num="1"
            />
            <Product
              className={location === "sell" ? "sell" : "purchase"}
              num="2"
            />
            <Product
              className={location === "sell" ? "sell" : "purchase"}
              num="3"
            />
            <Product
              className={location === "sell" ? "sell" : "purchase"}
              num="4"
            />
            <Product
              className={location === "sell" ? "sell" : "purchase"}
              num="5"
            />
            <Product
              className={location === "sell" ? "sell" : "purchase"}
              num="6"
            />
            <Product
              className={location === "sell" ? "sell" : "purchase"}
              num="7"
            />
            <div className="pageBox">
              <ProductPageBtn value="<" onClick={handlePage} />
              {(location === "sell" ? sellData : purchaseData).map(
                (data, index) => {
                  if (!(index % 8)) {
                    return (
                      <ProductPageBtn
                        key={UserObj.uid + index.toString()}
                        className="pageBtn"
                        value={parseInt(index / 8) + 1}
                        id=""
                        onClick={handlePage}
                        name={location === "sell" ? "sell" : "purchase"}
                      />
                    );
                  }
                }
              )}
              <ProductPageBtn value=">" onClick={handlePage} />
            </div>
          </ProductBox>
        </Section>
      </Main>
    </div>
  );
};

export default Products;
