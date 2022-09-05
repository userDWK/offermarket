import React from "react";
import MainFooter from "../components/Main/MainFooter";
import MainHeader from "../components/Main/MainHeader";
import MainMain from "../components/Main/MainMain";

function MainPage() {
  return (
    <div className="mainPage">
      <MainHeader />
      <MainMain />
      <MainFooter />
    </div>
  );
}

export default MainPage;
