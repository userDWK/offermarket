import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Ui/Footer";
import Nav from "../../Ui/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import footerLogo from "../../images/header.jpg";

function MainFooter() {
  return (
    <div className="mainFooter">
      <Footer>
        <Nav foot>
          <ul>
            <Link to="/footer">
              <li>개인정보 처리방침</li>
            </Link>
            <Link to="/footer">
              <li>이용 약관</li>
            </Link>
            <Link to="/footer">
              <li>공지사항</li>
            </Link>
            <Link to="/footer">
              <li>공지사항</li>
            </Link>
            <Link to="/footer">
              <li>공지사항</li>
            </Link>
            <Link to="/footer">
              <li>공지사항</li>
            </Link>
            <Link to="/footer">
              <li>공지사항</li>
            </Link>
            <Link to="/footer">
              <li>공지사항</li>
            </Link>
          </ul>
        </Nav>
        <hr />
        <div className="companyIntro">
          <div className="companyLeft">
            <div className="introBox">
              <img src={footerLogo} />
              <div>
                <p>
                  상호명 및 서비스 제공 : 오퍼마켓
                  <br />
                  대표 : 김동우
                  <br />
                  부산시 동래구 수안동
                  <br />
                  010-5150-9953
                  <br />
                  skdoo1213@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="companyRight">
            <div>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </div>
            <p>&copy; OFFERMARKET Corp</p>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default MainFooter;
