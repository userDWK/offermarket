import styled, { css } from "styled-components";

const FooterForm = styled.footer`
  height: 30rem;

  .companyIntro {
    max-width: 120rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3rem auto;
    padding: 0 5rem;

    .companyLeft {
      width: 60%;

      .introBox {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
          width: 8rem;
          height: 4rem;
        }
        p {
          margin: 0;
          margin-left: 3rem;
          height: 12.5rem;
          font-size: 1rem;
          line-height: 250%;
        }
      }
    }
    .companyRight {
      width: 40%;
      margin-left: auto;
      text-align: right;
      svg {
        position: relative;
        right: 0;
        margin-left: 2rem;
        cursor: pointer;
      }
      p {
        position: relative;
      }
    }
  }
`;

function Footer({ ...rest }) {
  return <FooterForm {...rest}></FooterForm>;
}

export default Footer;
