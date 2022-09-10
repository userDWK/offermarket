import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Ui/Header";
import Nav from "../../Ui/Nav";
import Logo from "../../images/header.jpg";
import { useRecoilState } from "recoil";
import { IsLoggedIn, UserObj } from "../../atoms/State";
import Selector from "../../Ui/Selector";
function MainHeader() {
  const [searchText, setSearchText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const handleText = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mainHeader">
      <Header>
        <div className="mainLeft">
          <Link to="/">
            <img src={Logo} alt="headerLogo" width="180" />
          </Link>
        </div>
        <div className="mainCenter">
          <form onSubmit={handleSearch}>
            <Selector className="header" />
            <input type="text" className="search" onChange={handleText}></input>
            <input type="submit" value="검색" className="searchSub"></input>
          </form>
        </div>
        <div className="mainRight">
          <Nav>
            <ul>
              <Link to="/service">
                <li>고객센터</li>
              </Link>
              <Link to="/basket">
                <li>관심상품</li>
              </Link>
              <Link to="/profile">
                <li>마이페이지</li>
              </Link>
              <Link to={userObj ? "/profile" : "/login"}>
                <li className={(userObj ? "login" : "").toString()}>
                  {userObj ? userObj.name + " 님" : "로그인"}
                </li>
              </Link>
            </ul>
          </Nav>
        </div>
      </Header>
      <hr />
    </div>
  );
}

export default MainHeader;
