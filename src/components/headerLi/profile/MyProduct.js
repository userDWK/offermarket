import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserObj } from "../../../atoms/State";
import { dbService } from "../../../fbase";
import { SelectProduct } from "../../../atoms/State";
import FormBox from "../../../Ui/FormBox";
import {
  deleteDoc,
  deleteField,
  doc,
  FieldValue,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { render } from "@testing-library/react";

const MyProduct = () => {
  const [selectProduct, setSelectProduct] = useRecoilState(SelectProduct);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [mySell, setMySell] = useState([]);
  const [myPurchase, setMyPurchase] = useState([]);

  let navigate = useNavigate();

  const getData = useCallback(
    async (q) => {
      const data = await getDocs(q);
      data.docs.map((doc, i) => {
        setMySell(doc.data().sellItems);
        setMyPurchase(doc.data().purchaseItems);
      });
    },
    [mySell, myPurchase]
  );
  const searchData = useCallback(() => {
    const userRef = dbService.collection("users");
    const q = userRef.where("uid", "==", `${userObj.uid}`);
    getData(q);
  }, [mySell, myPurchase]);

  const movePage = (className) => {
    if (className === "sell")
      navigate(
        `/sell/product/uid=${userObj.uid}/date=${selectProduct.resistDate}`
      );
    else
      navigate(
        `/purchase/product/uid=${userObj.uid}/date=${selectProduct.resistDate}`
      );
  };
  const handleSelect = (e) => {
    const {
      target: { className, id },
    } = e;
    if (className === "sell") {
      setSelectProduct(mySell[id]);
    } else {
      setSelectProduct(myPurchase[id]);
    }
    movePage(className);
  };
  useEffect(() => {
    searchData();
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    let delRef = {};
    const {
      target: { id, className },
    } = e;
    if (className === "sell") {
      delRef = mySell[id];
    } else if (className === "purchase") {
      delRef = myPurchase[id];
    }

    if (!window.confirm(`${delRef.productName} 상품을 정말 삭제하시겠습니까?`))
      return;

    if (className === "sell") {
      delRef = mySell[id];

      deleteDoc(doc(dbService, "sell", delRef.resistDate));

      dbService
        .collection("users")
        .doc(userObj.uid)
        .update({
          sellItems: firebase.firestore.FieldValue.arrayRemove({
            ...delRef,
          }),
        });
    } else if (className === "purchase") {
      delRef = myPurchase[id];

      deleteDoc(doc(dbService, "purchase", delRef.resistDate));

      dbService
        .collection("users")
        .doc(userObj.uid)
        .update({
          purchaseItems: firebase.firestore.FieldValue.arrayRemove({
            ...delRef,
          }),
        });
    }
  };

  const handleModify = (e) => {
    e.preventDefault();
    navigate("/profile/modify");
  };

  return (
    <>
      <FormBox className="myProduct">
        <table>
          <caption>판매 등록 상품</caption>
          <thead>
            <tr>
              <th></th>
              <th>No.</th>
              <th>상품명</th>
              <th>등록일시</th>
            </tr>
          </thead>
          <tbody>
            {mySell &&
              mySell.map((data, index) => {
                return (
                  <tr key={data.resistDate}>
                    <td>
                      <button
                        className="sell"
                        id={index}
                        onClick={handleDelete}
                      >
                        X
                      </button>
                      <button
                        className="sell"
                        id={index}
                        onClick={handleModify}
                      >
                        R
                      </button>
                    </td>
                    <td>{index + 1}</td>
                    <td className="sell" id={index} onClick={handleSelect}>
                      {data.productName}
                    </td>
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
          </tbody>
        </table>
      </FormBox>
      <hr />
      <FormBox className="myProduct">
        <table>
          <caption>구매 등록 상품</caption>
          <thead>
            <tr>
              <th></th>
              <th>No.</th>
              <th>상품명</th>
              <th>등록일시</th>
            </tr>
          </thead>
          <tbody>
            {myPurchase &&
              myPurchase.map((data, index) => {
                return (
                  <tr key={data.resistDate}>
                    <td>
                      <button
                        className="purchase"
                        id={index}
                        onClick={handleDelete}
                      >
                        X
                      </button>
                      <button
                        className="purchase"
                        id={index}
                        onClick={handleModify}
                      >
                        R
                      </button>
                    </td>
                    <td>{index + 1}</td>
                    <td className="purchase" id={index} onClick={handleSelect}>
                      {data.productName}
                    </td>
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
          </tbody>
        </table>
      </FormBox>
    </>
  );
};

export default MyProduct;
