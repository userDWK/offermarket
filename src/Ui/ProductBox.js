import styled, { css } from "styled-components";

const ProductDiv = styled.div`
  margin-top: 5rem;
  padding-left: 4.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10% 0%;

  ${(props) =>
    props.main &&
    css`
      grid-template-rows: 1fr;
      margin-top: 2.3rem;
    `}

  .pageBox {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0%;
    left: 0;
    width: 100%;
    height: 8%;
    border-top: 1px solid rgba(200, 200, 200, 0.5);
    background: rgba(255, 255, 255, 0.9);
  }
`;

function ProductBox({ ...rest }) {
  return <ProductDiv {...rest}></ProductDiv>;
}

export default ProductBox;
