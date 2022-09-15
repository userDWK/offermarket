import styled, { css } from "styled-components";

const InformationForm = styled.div`
  position: relative;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 44rem;
  height: 30rem;
  margin: 0 auto;
  border: 1px solid rgba(50, 50, 50, 0.5);
  border-radius: 8px;
  background: white;
  z-index: 0;

  ${(props) =>
    !props.toggle &&
    css`
      display: none;
    `}
`;

function ProductInformation(props) {
  return (
    <InformationForm toggle={props.toggle} view={props.className}>
      {props.children}
    </InformationForm>
  );
}

export default ProductInformation;
