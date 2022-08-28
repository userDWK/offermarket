import styled, { css } from "styled-components";

const Message = ({ text, type }) => {
  return <>{text && <PStyled type={type}>{text}</PStyled>}</>;
};
const PStyled = styled.p`
  padding: 0.75rem;
  border: 1px solid lightgray;
  background: #f0f0f0;
  border-radius: 6px;
  ${(props) => {
    if (props.type === "error")
      return css`
        width: 11rem;
        text-align: center;
        border-color: transparent;
        background-color: tomato;
        color: white;
      `;
    else if (props.type === "success") {
      return css`
        border-color: transparent;
        background-color: yellow;
        color: black;
      `;
    }
  }}
`;
export default Message;
