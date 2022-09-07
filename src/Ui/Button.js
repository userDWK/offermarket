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
      props.resist &&
      css`
        width: 100%;
        height: 2.5rem;
        background: orange;
        margin: 4rem auto 2rem;
        color: #111;
        text-align: center;
        font-size: 1rem;
      `}

      ${(props) =>
        props.product &&
        css`
          font-size: 1rem;
          font-weight: 300;
          width: 100%;
          height: 2.25rem;
          margin-top: 3.6rem;
          background: rgba(50, 50, 50, 0.1);
          box-shadow: none;
          line-height: 180%;
          span {
            font-size: 1.25rem;
          }
          &:hover {
            background: rgba(0, 0, 0, 0.1);
          }
        `}
`;

function Button({ ...rest }) {
  return <ButtonForm onClick={rest.onclick} {...rest}></ButtonForm>;
}

export default Button;
