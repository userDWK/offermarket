import styled from "styled-components";

const ProductForm = styled.div`
  height: 25rem;
  width: 25rem;
  background: orange;

  &:last-child {
    gap: 0;
  }
`;

function Product({ ...rest }) {
  return <ProductForm {...rest}></ProductForm>;
}

export default Product;
