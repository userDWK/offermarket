import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Ui/Button";
import Main from "../Ui/Main";
import Product from "../Ui/Product";
import ProductBox from "../Ui/ProductBox";
import Section from "../Ui/Section";

const Products = () => {
  return (
    <div className="purchageMain">
      <Main>
        <Section>
          <div className="productBox product">
            <h2>최신 등록 상품</h2>
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

export default Products;
