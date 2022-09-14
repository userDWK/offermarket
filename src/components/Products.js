import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  DisPurchasePage,
  DisSellPage,
  PageLine,
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
  const [disSellPage, setDisSellPage] = useRecoilState(DisSellPage);
  const [disPurchasePage, setDisPurchasePage] = useRecoilState(DisPurchasePage);
  const [pageLine, setPageLine] = useRecoilState(PageLine);
  const location = useLocation();
  const handlePage = (e) => {
    const {
      target: { name, value },
    } = e;
    if (value === "<") {
      if (pageLine > 1) {
        setPageLine((prev) => --prev);
        if (name === "sell") {
          setDisSellPage((pageLine - 2) * 5 + 1);
        } else if (name === "purchase") {
          setDisPurchasePage((pageLine - 2) * 5 + 1);
        }
      }
    } else if (value === ">") {
      if (
        pageLine * 5 <
        Math.ceil((name === "sell" ? sellData : purchaseData).length) / 8
      ) {
        setPageLine((prev) => ++prev);
        if (name === "sell") {
          setDisSellPage(pageLine * 5 + 1);
        } else if (name === "purchase") {
          setDisPurchasePage(pageLine * 5 + 1);
        }
      }
    } else {
      if (name === "sell") {
        setDisSellPage(value);
      } else if (name === "purchase") {
        setDisPurchasePage(value);
      }
    }
  };
  return (
    <div className="purchageMain">
      <Main>
        <Section>
          <div className="productBox product">
            <h2>최신 등록 상품</h2>
          </div>
          <ProductBox className="productPage">
            <Product
              className={
                location.pathname.slice(1, 5) === "sell" ? "sell" : "purchase"
              }
              num="0"
            />
            <Product
              className={
                location.pathname.slice(1, 5) === "sell" ? "sell" : "purchase"
              }
              num="1"
            />
            <Product
              className={
                location.pathname.slice(1, 5) === "sell" ? "sell" : "purchase"
              }
              num="2"
            />
            <Product
              className={
                location.pathname.slice(1, 5) === "sell" ? "sell" : "purchase"
              }
              num="3"
            />
            <Product
              className={
                location.pathname.slice(1, 5) === "sell" ? "sell" : "purchase"
              }
              num="4"
            />
            <Product
              className={
                location.pathname.slice(1, 5) === "sell" ? "sell" : "purchase"
              }
              num="5"
            />
            <Product
              className={
                location.pathname.slice(1, 5) === "sell" ? "sell" : "purchase"
              }
              num="6"
            />
            <Product
              className={
                location.pathname.slice(1, 5) === "sell" ? "sell" : "purchase"
              }
              num="7"
            />
            <div className="pageBox">
              <ProductPageBtn
                value="<"
                name={
                  location.pathname.slice(1, 5) === "sell" ? "sell" : "purchase"
                }
                onClick={handlePage}
              />
              {purchaseData.length &&
                sellData.length &&
                (location.pathname.slice(1, 5) === "sell"
                  ? sellData
                  : purchaseData
                ).map((data, index) => {
                  if (
                    !(index % 8) &&
                    parseInt(index / 8) + 1 > (pageLine - 1) * 5 &&
                    parseInt(index / 8) + 1 <= 5 * pageLine
                  ) {
                    return (
                      <Link
                        key={UserObj.uid + index.toString()}
                        to={`pageNum=${Math.floor(index / 8) + 1}`}
                      >
                        <ProductPageBtn
                          className="pageBtn"
                          value={parseInt(index / 8) + 1}
                          id=""
                          onClick={handlePage}
                          name={
                            location.pathname.slice(1, 5) === "sell"
                              ? "sell"
                              : "purchase"
                          }
                        />
                      </Link>
                    );
                  }
                })}
              <ProductPageBtn
                value=">"
                name={
                  location.pathname.slice(1, 5) === "sell" ? "sell" : "purchase"
                }
                onClick={handlePage}
              />
            </div>
          </ProductBox>
        </Section>
      </Main>
    </div>
  );
};

export default Products;
