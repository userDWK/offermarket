import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserObj } from "../../../atoms/State";
import { dbService } from "../../../fbase";
import { SelectProduct } from "../../../atoms/State";
import Button from "../../../Ui/Button";
import FormBox from "../../../Ui/FormBox";
import firebase from "firebase/compat/app";
import { getDocs, where } from "firebase/firestore";
import { Link } from "react-router-dom";

const MyProduct = () => {
  const [selectProduct, setSelectProduct] = useRecoilState(SelectProduct);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [mySell, setMySell] = useState([]);
  const [myPurchase, setMyPurchase] = useState([]);

  const getData = async (q) => {
    const data = await getDocs(q);
    data.docs.map((doc, i) => {
      setMySell(doc.data().sellItems);
      setMyPurchase(doc.data().purchaseItems);
    });
  };
  const searchData = () => {
    const userRef = dbService.collection("users");
    const q = userRef.where("uid", "==", `${userObj.uid}`);
    getData(q);
    return true;
  };

  const handleSelect = (e) => {
    e.preventDefault();
    const {
      target: { className, id },
    } = e;
    if (className === "sell") {
      setSelectProduct(mySell[id]);
    } else {
      setSelectProduct(myPurchase[id]);
    }
  };
  return (
    <>
      <FormBox className="myProduct">
        <table>
          <caption>판매 등록 상품</caption>
          <thead>
            <tr>
              <th>No.</th>
              <th>상품명</th>
              <th>등록일시</th>
            </tr>
          </thead>
          {searchData() === true &&
            mySell &&
            mySell.map((data, index) => {
              return (
                <tr key={data.resistDate}>
                  <td>{index + 1}</td>
                  <Link
                    to={
                      selectProduct &&
                      `sell/product/uid=${userObj.uid}/date=${selectProduct.resistDate}`
                    }
                  >
                    <td className="sell" id={index} onClick={handleSelect}>
                      {data.productName}
                    </td>
                  </Link>
                  <td>
                    {data.resistDate
                      .slice(2, 14)
                      .replace(
                        /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,
                        "$1-$2-$3 / $4.$5.$6"
                      )}
                  </td>
                </tr>
              );
            })}
        </table>
      </FormBox>
      <hr />
      <FormBox className="myProduct">
        <table>
          <caption>구매 등록 상품</caption>
          <thead>
            <th>No.</th>
            <th>상품명</th>
            <th>등록일시</th>
          </thead>

          {searchData() === true &&
            myPurchase &&
            myPurchase.map((data, index) => {
              return (
                <tr key={data.resistDate}>
                  <td>{index + 1}</td>
                  <Link
                    to={
                      selectProduct &&
                      `purchase/product/uid=${userObj.uid}/date=${selectProduct.resistDate}`
                    }
                  >
                    <td className="purchase" id={index} onClick={handleSelect}>
                      {data.productName}
                    </td>
                  </Link>
                  <td>
                    {data.resistDate
                      .slice(2, 14)
                      .replace(
                        /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g,
                        "$1-$2-$3 / $4.$5.$6"
                      )}
                  </td>
                </tr>
              );
            })}
        </table>
      </FormBox>
    </>
  );
};

export default MyProduct;
