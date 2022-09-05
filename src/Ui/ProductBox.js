import styled, { css } from "styled-components";

const ProductDiv = styled.div`
  margin-top: 5rem;
  padding-left: 4.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10% 0%;
`;

function ProductBox({ ...rest }) {
  return <ProductDiv {...rest}></ProductDiv>;
}

export default ProductBox;
