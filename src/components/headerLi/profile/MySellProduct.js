import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserObj } from "../../../atoms/State";
import { dbService } from "../../../fbase";
import { SelectProduct } from "../../../atoms/State";
import Button from "../../../Ui/Button";
import FormBox from "../../../Ui/FormBox";
import firebase from "firebase/compat/app";
import { getDocs, where } from "firebase/firestore";

const MySellProduct = () => {
  const [selectProduct, setSelectProduct] = useRecoilState(SelectProduct);
  const [userObj, setUserObj] = useRecoilState(UserObj);
  const [data, setData] = useState({});
  const getData = async (q) => {
    const data = await getDocs(q);
    data.docs.map((doc, i) => {
      setData(doc.data().sellItems);
      // console.log(doc.data().sellItems);
    });
  };
  useEffect(() => {
    const userRef = dbService.collection("users");
    const q = userRef.where("uid", "==", `${userObj.uid}`);
    getData(q);
  }, []);

  return (
    <FormBox className="product">
      {data.map((data, index) => {
        return (
          <div key={data.resistDate}>
            <p>{index + 1}</p>
            <p>{data.productName}</p>
            <p>{data.resistDate}</p>
          </div>
        );
      })}
    </FormBox>
  );
};

export default MySellProduct;
