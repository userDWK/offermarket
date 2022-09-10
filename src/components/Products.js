import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Main from "../Ui/Main";
import Product from "../Ui/Product";
import ProductBox from "../Ui/ProductBox";
import Section from "../Ui/Section";

const Products = () => {
  const location = useLocation().pathname.slice(1);
  return (
    <div className="purchageMain">
      <Main>
        <Section>
          <div className="productBox product">
            <h2>최신 등록 상품</h2>
          </div>
          <ProductBox>
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
          </ProductBox>
        </Section>
      </Main>
    </div>
  );
};

export default Products;
