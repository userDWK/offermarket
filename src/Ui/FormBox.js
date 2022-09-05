import React from "react";
import styled, { css } from "styled-components";

const FormDiv = styled.div`
  width: 22rem;
  height: 24rem;
  margin: 5rem auto;
  border: 2px solid rgba(50, 50, 50, 0.2);
  border-radius: 3px;
  padding: 0.5rem 2rem 2rem;

  h3 {
    font-size: 2rem;
    font-weight: 500;
    color: #111;
    margin: 1rem 0 -1.5rem;
    padding-left: 0.5rem;
  }

  .helpBox p {
    margin: 0.35rem 0 0;
    line-height: 100%;
  }

  .formFootBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.25rem;

    .socialLogin {
      svg {
        font-size: 1.5rem;
        margin: 0 0.35rem;
        cursor: pointer;
      }
    }
  }
  ${(props) =>
    props.create &&
    css`
      padding: 100rem;
    `}
`;

function FormBox(props) {
  return <FormDiv>{props.children}</FormDiv>;
}

export default FormBox;
