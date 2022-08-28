import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  border-bottom: #f0f0f0 1px solid;
  padding: 1.25rem 0;
`;
const StyledLabel = styled.label`
  font-weight: bolder;
  width: auto;
  margin-right: 1rem;
`;

const Field = (props) => {
  return (
    <StyledDiv>
      <StyledLabel htmlFor={props.id}>{props.labelText}</StyledLabel>
      <div>{props.children}</div>
    </StyledDiv>
  );
};
export default Field;
