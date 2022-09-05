import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Ui/Header";
import Nav from "../../Ui/Nav";
import Logo from "../../images/header.jpg";

function MainHeader() {
  const [searchText, setSearchText] = useState("");
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
            <select>
              <option value="">전체</option>
              <option value="woman">여성패션</option>
              <option value="man">남성패션</option>
              <option value="child">유아동패션</option>
              <option value="brand">명품관</option>
              <option value="shoes">신발</option>
              <option value="beauty">뷰티</option>
              <option value="birth">출산</option>
              <option value="food">식품</option>
              <option value="kitchen">주방용품</option>
              <option value="daily">생활용품</option>
              <option value="sports">스포츠/레저</option>
              <option value="car">자동차용품</option>
              <option value="book">도서/음반/DVD</option>
              <option value="health">헬스/건강식품</option>
              <option value="tour">여행</option>
              <option value="animal">반려동물용품</option>
              <option value="stationery">문구/완구/오피스</option>
              <option value="etc">기타</option>
            </select>
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
              <Link to="/login">
                <li>로그인</li>
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
