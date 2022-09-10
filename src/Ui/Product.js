import { useRecoilState } from "recoil";
import styled from "styled-components";
import { PurchaseData, SellData } from "../atoms/State";

const ProductForm = styled.div`
  position: relative;
  height: 25rem;
  width: 25rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.75rem;

  &:last-child {
    gap: 0;
  }
  .itemBox {
    img {
      position: relative;
      top: 1rem;
      left: 50%;
      transform: translate(-50%);
      max-height: 16rem;
      max-width: 25rem;
    }
  }
  .itemText {
    hr {
      position: absolute;
      transform: translate(-10%);
      width: 25rem;
      border-color: #111;
    }
    position: absolute;
    bottom: 0%;
    left: 10%;
    h5 {
      font-size: 1.15rem;
      font-weight: 500;
      margin: 2rem 0 0.5rem;
    }
    p {
      font-size: 1.1rem;
      font-weight: bolder;
      margin: 0.5rem 0 1.5rem;
    }
  }
`;

function Product(props) {
  const [sellData, setSellData] = useRecoilState(SellData);
  const [purchaseData, setPurchaseData] = useRecoilState(PurchaseData);
  return (
    <ProductForm>
      {props.className === "sell"
        ? +props.num + 1 <= sellData.length && (
            <div className="itemBox">
              <img src={sellData[+props.num].img} />
              <div className="itemText">
                <hr />
                <h5>{sellData[+props.num].productName}</h5>
                <p>
                  {sellData[+props.num].sellPrice
                    .split("")
                    .reverse()
                    .map((num, index) => {
                      if (sellData[+props.num].sellPrice.length === index + 1)
                        return num;
                      return (index + 1) % 3 === 0 ? "," + num : num;
                    })
                    .reverse()}
                  원
                </p>
              </div>
            </div>
          )
        : +props.num + 1 <= purchaseData.length && (
            <div className="itemBox">
              <img src={purchaseData[+props.num].img} />
              <div className="itemText">
                <hr />
                <h5>{purchaseData[+props.num].productName}</h5>
                <p>
                  {purchaseData[+props.num].purchasePrice
                    .split("")
                    .reverse()
                    .map((num, index) => {
                      if (
                        purchaseData[+props.num].purchasePrice.length ===
                        index + 1
                      )
                        return num;
                      return (index + 1) % 3 === 0 ? "," + num : num;
                    })
                    .reverse()}
                  원
                </p>
              </div>
            </div>
          )}
    </ProductForm>
  );
}

export default Product;
