import React, { useState } from "react";
import Button from "../../Ui/Button";
import Main from "../../Ui/Main";
import Product from "../../Ui/Product";
import ProductBox from "../../Ui/ProductBox";
import Section from "../../Ui/Section";
import mainImage from "../../images/main.jpg";
import { Link, useLocation } from "react-router-dom";
import { dbService } from "../../fbase";
import firebase from "firebase/compat/app";
import { query, orderBy, limit, getDocs } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { PurchaseData, SellData } from "../../atoms/State";

const MainMain = () => {
  const [sellData, setSellData] = useRecoilState(SellData);
  const [purchaseData, setPurchaseData] = useRecoilState(PurchaseData);
  return (
    <div className="mainMain">
      <Main>
        <div className="mainIntro">
          <div className="background">
            <img src={mainImage} alt="main" />
          </div>
          <div className="introTextBox">
            <h2>오퍼를 통해 원하는 가격에 원하는 상품을 GET!</h2>
            <p>
              이젠 판매자와 구매자가 가격으로 대화한다!
              <br />
              거래를 희망하는 상품을 검색하고, 희망하는 <br /> 가격을
              오퍼해보세요!
            </p>
          </div>
        </div>
        <Section>
          <div className="productBox">
            <h2>최근 등록된 상품들을 만나보세요!</h2>
            <div className="registerBox"></div>
          </div>
          <hr />
          <div className="mainGridBox">
            <div className="mainSell">
              <h2>판매 상품</h2>

              <Link to="/sell/pageNum=1">
                <Button sell>판매 상품보기</Button>
              </Link>
            </div>
            <ProductBox main>
              <Product className="sell" num="0"></Product>
              <Product className="sell" num="1"></Product>
              <Product className="sell" num="2"></Product>
              <Product className="sell" num="3"></Product>
            </ProductBox>
            <div className="mainSell">
              <h2>구매 상품</h2>
              <Link to="/purchase/pageNum=1">
                <Button purchase>구매 상품보기</Button>
              </Link>
            </div>
            <ProductBox main>
              <Product className="purchase" num="0"></Product>
              <Product className="purchase" num="1"></Product>
              <Product className="purchase" num="2"></Product>
              <Product className="purchase" num="3"></Product>
            </ProductBox>
          </div>
        </Section>
      </Main>
    </div>
  );
};

export default MainMain;
