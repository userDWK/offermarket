import styled, { css } from "styled-components";

const ProductConForm = styled.div`
  .productResist {
    position: absolute;
    left: 50%;
    transform: translate(-55%);
    width: 120rem;
    text-align: right;
    margin-top: 0.7rem;
    z-index: 2;
  }
`;

function ProductCon({ ...rest }) {
  return <ProductConForm {...rest}></ProductConForm>;
}

export default ProductCon;
