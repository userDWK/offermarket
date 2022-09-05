import React, { useState } from "react";
import Button from "../../Ui/Button";
import Main from "../../Ui/Main";
import Product from "../../Ui/Product";
import ProductBox from "../../Ui/ProductBox";
import Section from "../../Ui/Section";
import mainImage from "../../images/main.jpg";
import { Link } from "react-router-dom";

const MainMain = () => {
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
            <h2>최신 등록 상품</h2>
            <div className="registerBox">
              <Link to="/purchase">
                <Button purchase>구매 상품보기</Button>
              </Link>
              <Link to="/sell">
                <Button sell>판매 상품보기</Button>
              </Link>
            </div>
          </div>
          <ProductBox>
            <Product>1</Product>
            <Product>2</Product>
            <Product>3</Product>
            <Product>4</Product>
            <Product>5</Product>
            <Product>6</Product>
            <Product>7</Product>
            <Product>8</Product>
          </ProductBox>
          <Button all>더 보기</Button>
        </Section>
      </Main>
    </div>
  );
};

export default MainMain;
