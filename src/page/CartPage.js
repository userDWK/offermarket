import React from "react";
import Cart from "../components/headerLi/cart/Cart";
import MainFooter from "../components/Main/MainFooter";
import MainHeader from "../components/Main/MainHeader";

const CartPage = () => {
  return (
    <>
      <MainHeader />
      <Cart />
      <MainFooter />
    </>
  );
};

export default CartPage;
