import styled, { css } from "styled-components";

const SectionForm = styled.section`
  position: relative;
  max-width: 120rem;
  margin: 5rem auto 0;
  height: 100%;
  z-index: 1;
  .productBox {
    display: flex;
    align-items: center;
    h2 {
      font-size: 2.25rem;
      width: 30rem;
      margin-left: 5rem;
    }
  }
  .registerBox {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 3rem;
  }

  .mainGridBox {
    .mainSell {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 3rem 5rem 0;
    }
    h2 {
      font-size: 1.75rem;
    }
  }
`;

function Section(props) {
  return <SectionForm>{props.children}</SectionForm>;
}

export default Section;
