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
      cursor: pointer;

      &:hover {
        background: rgba(230, 150, 0, 0.7);
      }
      &:focus {
        box-shadow: 0 0 10px rgba(200, 150, 0, 1);
      }
    }
  }

  .mainRight {
    width: 35%;
    margin-right: 5rem;
  }

  .login {
    font-weight: 600;
  }

  @media (max-width: 412px) {
    display: inline-block;
    margin: 2rem auto 0;

    .mainLeft {
      margin: 0 0 0 2rem;

      img {
        width: 20rem;
        padding: 0;
      }
    }

    .mainCenter {
      margin: 5rem auto 5rem;
      width: 90%;

      select {
        padding: 2rem;
        border: none;
        outline:none;
      }
      .search {
        padding: 2rem 0;
      }
    }

    .mainRight {
      position: absolute;
      top: 2.5rem;
      right: 0;
      width: 35rem;
      margin: 0;
    }

    hr {
      display: none;
    }
  }
`;

function Header(props) {
  return <HeaderForm>{props.children}</HeaderForm>;
}

export default Header;
