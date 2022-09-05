import styled, { css } from "styled-components";

const SectionForm = styled.section`
  position: relative;
  max-width: 120rem;
  margin: 5rem auto 0;
  height: 80rem;
  z-index: 1;
  .productBox {
    display: flex;
    align-items: center;
    h2 {
      font-size: 2.25rem;
      width: 20rem;
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
`;

function Section(props) {
  return <SectionForm>{props.children}</SectionForm>;
}

export default Section;
