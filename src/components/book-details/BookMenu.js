import React from "react";
import { Link, useLocation, useMatch } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  li {
    padding: 4px;
    margin: 5px;
    background-color: #f0f0f0;
    display: inline-block;
    &.active {
      background-color: #ccc;
    }
  }
`;
const BookMenu = ({ id }) => {
  const location = useLocation();

  return (
    <StyledUl>
      <li
        className={(`/book/${id}` === location.pathname && "active").toString()}
      >
        <Link to="">일반 정보</Link>
      </li>
      <li
        className={(
          `/book/${id}/authors` === location.pathname && "active"
        ).toString()}
      >
        <Link to="authors">작가 정보</Link>
      </li>
      <li
        className={(
          `/book/${id}/photos` === location.pathname && "active"
        ).toString()}
      >
        <Link to="photos">사진 정보</Link>
      </li>
    </StyledUl>
  );
};

export default BookMenu;
