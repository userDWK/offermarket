import styled, { css } from "styled-components";

const ButtonForm = styled.button`
  width: 9rem;
  height: 3.25rem;
  font-size: 1.15rem;
  font-weight: bold;
  color: #111;
  border-radius: 4px;
  border: 1px solid rgba(50, 50, 50, 0.4);
  background: rgba(50,50,50,0.1);
  margin-right: 3rem;
  box-shadow: 0 0 4px rgba(50, 50, 50, 0.3);
  cursor : pointer;

  &:hover {
    background : rgba(230,150,0,0.7);
  }

  &:focus {
    box-shadow: 0 0 10px rgba(200, 150, 0, 1);
  }
  ${(props) =>
    props.all &&
    css`
      background: rgba(20, 20, 20, 0.1);
    `}}

    ${(props) =>
      props.resist &&
      css`
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translate(-50%);
        width: 90%;
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
          position: absolute;
          bottom: 18%;
          left: 50%;
          transform: translate(-50%);
          font-size: 1rem;
          font-weight: 300;
          width: 90%;
          height: 2.25rem;
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
