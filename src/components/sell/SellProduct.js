import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IsModal, Message, SelectProduct } from "../../atoms/State";
import Button from "../../Ui/Button";
import FormBox from "../../Ui/FormBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useLocation } from "react-router-dom";
import Modal from "../../Ui/Modal";

const SellProduct = () => {
  const [selectProduct, setSelectProduct] = useRecoilState(SelectProduct);
  const [cnt, setCnt] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [selectBundle, setSelectBundle] = useState({});
  const [isModal, setIsModal] = useRecoilState(IsModal);
  const [message, setMessage] = useRecoilState(Message);

  const location = useLocation();

  const handleAmount = (e) => {
    setCnt(e.target.value);
  };

  const bundleToggle = (e) => {
    e.preventDefault();
    setToggle((prev) => !prev);
    setSelectBundle({ ...selectProduct.bundle[e.target.id] });
  };

  const handleProduct = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let obj = localStorage.getItem(
      name === "cart" ? "sellCart" : "sellInterest"
    );
    obj = obj ? JSON.parse(obj) : [];
    obj = [...obj].filter((item, idx) => item.num !== selectProduct.num);
    if (name === "cart") {
      obj.push({
        ...selectBundle,
        cnt,
        ...selectProduct,
      });
      localStorage.setItem("sellCart", JSON.stringify(obj));
    } else {
      obj.push(selectProduct);
      localStorage.setItem("sellInterest", JSON.stringify(obj));
    }
    setMessage({
      message: "등록이 완료되었습니다",
      type: "Success",
      page: name === "cart" ? "cart" : "interest",
    });
    setIsModal(true);
  };
  useEffect(() => {
    if (location.pathname.includes("sell/product/uid=")) {
      selectProduct.num &&
        localStorage.setItem("product", JSON.stringify(selectProduct));

      localStorage.getItem("product") &&
        setSelectProduct(JSON.parse(localStorage.getItem("product")));
    }
  }, []);
  return (
    <>
      <Modal
        show={isModal}
        text={message.message}
        type={message.type}
        page={message.page}
        close={() => {
          setIsModal(false);
        }}
      ></Modal>
      <FormBox className="product">
        <div className="productMain">
          <div className="imgBox">
            <figure>
              <img src={selectProduct.img} alt={selectProduct.productName} />
            </figure>
          </div>
          <div className="textBox">
            <div className="textHeader">
              <h2>{selectProduct.productName}</h2>
              <Button interest onClick={handleProduct} name="interest">
                <FontAwesomeIcon icon={faHeart} />{" "}
              </Button>
            </div>
            <hr />
            <div className="priceBox">
              <p>
                {Math.floor(
                  100 -
                    (selectProduct.sellPrice / selectProduct.salePrice) * 100
                )}
                %{" "}
                <span>
                  {parseInt(selectProduct.salePrice).toLocaleString()}원
                </span>
              </p>
              <strong>
                {parseInt(selectProduct.sellPrice).toLocaleString()}원
              </strong>
            </div>
            <hr />
            <div className="shipBox">
              <p>
                배송비 : {parseInt(selectProduct.parcelPrice).toLocaleString()}
                원
              </p>
            </div>
            <hr />
            <div className="tradeBox">
              <strong>판매자 : {selectProduct.seller}</strong>
              <p>택배사 : {selectProduct.courier}</p>
            </div>
            <hr />
            <div className="etcBox">
              <strong>
                기타 상세 정보 : <br />
                <br /> {selectProduct.etc}
              </strong>
            </div>
            <hr />
            <div className="bundleSelectBox">
              <Button onClick={bundleToggle}>
                <div>
                  <span> 용량/크기 * 수량</span>{" "}
                  {selectBundle.capacity ? (
                    <p>
                      {selectBundle.capacity} * {selectBundle.amount}
                      <br />
                      <br />
                      <strong>
                        {parseInt(selectBundle.price).toLocaleString() + "원"}
                      </strong>
                    </p>
                  ) : (
                    <p>구매하실 상품을 선택하세요.</p>
                  )}
                </div>
                {toggle ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </Button>
              <ul>
                {selectProduct.bundle &&
                  selectProduct.bundle.map((el, i) => {
                    return (
                      <li
                        onClick={bundleToggle}
                        key={uuidv4()}
                        id={i}
                        className={toggle ? "display".toString() : ""}
                      >
                        {el.amount} * {el.capacity}
                        <br />
                        <strong>
                          {" "}
                          {parseInt(el.price).toLocaleString()}원
                        </strong>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="sellBox">
              <input
                type="number"
                value={cnt}
                onChange={handleAmount}
                maxLength="2"
              />
              <Button onClick={handleProduct} name="cart">
                장바구니 등록
              </Button>
              <Button>구매하기</Button>
            </div>
          </div>
        </div>
      </FormBox>
    </>
  );
};

export default SellProduct;
