import styled from "styled-components";

const MainForm = styled.main`
  .background {
    width: 100%;
    height: 40rem;
    background: rgba(20, 20, 20, 0.8);
    img {
      width: 120rem;
      height: 40rem;
      opacity: 0.4;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }
  .mainIntro {
    position: relative;
    width: 100%;
    height: 40rem;
    // background: rgba(50, 50, 50, 0.8);
  }
  .introTextBox {
    position: absolute;
    width: 120rem;
    top: 15%;
    left: 50%;
    transform: translate(-50%);
    margin-left: 10rem;
    color: white;
    z-index: 10;
    opactiy: 1;

    h2 {
      font-size: 2rem;
      margin-bottom: 3rem;
      color: white;
      z-index: 10;
    }
    p {
      font-size: 1.25rem;
      font-weight: 500;
      color: white;
    }
  }
`;

function Main(props) {
  return <MainForm>{props.children}</MainForm>;
}

export default Main;
