import React from "react";
import styled, { css } from "styled-components";

const NavForm = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  li {
    position: relative;
    height: 100%;
    font-size: 1rem;
    margin-right: 2rem;
    color: black;
  }
  li::before {
    position: absolute;
    top: 50%;
    right: -1rem;
    transform: translate(0, -50%);
    content: "";
    display: block;
    background: rgba(50, 50, 50, 0.5);
    width: 1px;
    height: 70%;
  }
  a:last-child li::before {
    display: none;
  }

  ${(props) =>
    props.foot &&
    css`
      font-size: 5rem;
      margin-bottom: 2rem;
    `}
`;

function Nav(props) {
  return <NavForm>{props.children}</NavForm>;
}

export default Nav;
