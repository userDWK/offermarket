import styled, { css } from "styled-components";

const SelectForm = styled.select`
  ${(props) =>
    props.className === "header" &&
    css`
      width: 20%;
      height: 3rem;
      border-bottom-left-radius: 0.5rem;
      border-top-left-radius: 0.5rem;
      vertical-align: middle;
      text-align: left;
      border: 2px solid rgba(50, 50, 50, 0.4);
      cursor: pointer;
    `}
`;

function Selector(props) {
  return (
    <SelectForm className={props.className}>
      <option value="">전체</option>
      <option value="woman">여성패션</option>
      <option value="man">남성패션</option>
      <option value="child">유아동패션</option>
      <option value="brand">명품관</option>
      <option value="shoes">신발</option>
      <option value="beauty">뷰티</option>
      <option value="birth">출산</option>
      <option value="food">식품</option>
      <option value="kitchen">주방용품</option>
      <option value="daily">생활용품</option>
      <option value="sports">스포츠/레저</option>
      <option value="car">자동차용품</option>
      <option value="book">도서/음반/DVD</option>
      <option value="health">헬스/건강식품</option>
      <option value="tour">여행</option>
      <option value="animal">반려동물용품</option>
      <option value="stationery">문구/완구/오피스</option>
      <option value="etc">기타</option>
    </SelectForm>
  );
}

export default Selector;
