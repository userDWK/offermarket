import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  background-color: black;
  cursor: pointer;

  ${(props) =>
    props.outline &&
    css`
      border: 2px solid gray;
      background-color: white;
      border-radius: 6px;
      color: black;
      font-size: 20px;
    `}
`;

const Button = ({ loading, ...rest }) => {
  return (
    <ButtonStyled {...rest} disabled={loading}>
      {loading ? "저장 중 입니다...." : rest.children}
    </ButtonStyled>
  );
};

export default Button;
