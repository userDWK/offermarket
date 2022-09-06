import styled, { css } from "styled-components";

const ButtonForm = styled.button`
  width: 10rem;
  height: 4rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #111;
  border-radius: 4px;
  border: 1px solid rgba(50, 50, 50, 0.4);
  background: rgba(50, 200, 230, 0.3);
  margin-right: 3rem;
  box-shadow: 0 0 6px rgba(50, 50, 50, 0.5);
  cursor : pointer;
  ${(props) =>
    props.all &&
    css`
      position: absolute;
      bottom: 5%;
      right: 3rem;
      background: rgba(20, 20, 20, 0.1);
    `}}
    ${(props) =>
      props.login &&
      css`
        width: 100%;
        height: 2.5rem;
        background: orange;
        margin: 4rem auto 2rem;
        color: #111;
        text-align: center;
        font-size: 1rem;
      `}
`;

function Button({ ...rest }) {
  return <ButtonForm {...rest}></ButtonForm>;
}

export default Button;
