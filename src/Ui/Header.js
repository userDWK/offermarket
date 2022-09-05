import React from "react";
import styled, { css } from "styled-components";

const HeaderForm = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  text-align: center;

  .mainLeft {
    width: 25%;
    margin-left: 5rem;
  }

  .mainCenter {
    width: 40%;

    form {
    }
    select {
      width: 15%;
      height: 3rem;
      border-bottom-left-radius: 0.5rem;
      border-top-left-radius: 0.5rem;
      vertical-align: middle;
      text-align: left;
      border: 2px solid rgba(50, 50, 50, 0.4);
    }
    .search {
      border: 2px solid rgba(50, 50, 50, 0.4);
      padding: 0.5rem 0.75rem;
      width: 50%;
      height: 3rem;
      border-left: none;
      border-right: none;
      padding-left: 1.5rem;
      font-size: 1rem;
      vertical-align: middle;
    }
    .searchSub {
      border-bottom-right-radius: 1rem;
      border-top-right-radius: 1rem;
      border: 2px solid rgba(50, 50, 50, 0.4);
      padding: 0.5rem 0.75rem;
      width: 15%;
      height: 3rem;
      border-left: none;
      background: orange;
      vertical-align: middle;
    }
  }

  .mainRight {
    width: 35%;
    margin-right: 5rem;
  }
`;

function Header(props) {
  return <HeaderForm>{props.children}</HeaderForm>;
}

export default Header;
