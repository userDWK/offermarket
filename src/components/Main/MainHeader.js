import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Ui/Header";
import Nav from "../../Ui/Nav";
import Logo from "../../images/header.jpg";
import { useRecoilState } from "recoil";
import { DisPage, IsLoggedIn, IsModal, UserObj } from "../../atoms/State";
import Selector from "../../Ui/Selector";
import { authService } from "../../fbase";
import Modal from "../../Ui/Modal";
function MainHeader() {
  const [searchText, setSearchText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedIn);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [isModal, setIsModal] = useRecoilState(IsModal);

  const navigate = useNavigate();
  const handleText = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
  };
  const handleLogout = (e) => {
    e.preventDefault();
    authService.signOut();
    navigate("/");
  };
  const checkLogin = (e) => {
    if (!userObj) {
      setIsModal(true);
    }
  };

  return (
    <div className="mainHeader">
      <Modal
        show={isModal}
        text="로그인 후, 이용해 주세요."
        type="Error"
        login
        close={() => {
          setIsModal(false);
        }}
      ></Modal>
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
              <Link to={userObj ? "/profile" : "/"}>
                <li onClick={checkLogin}>마이페이지</li>
              </Link>
              <Link to={userObj ? "/" : "/login"}>
                <li
                  className={(userObj ? "login" : "").toString()}
                  onClick={userObj && handleLogout}
                >
                  {userObj ? "로그아웃" : "로그인"}
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
