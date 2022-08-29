import React, { useContext, useState } from "react";
import { dbService } from "../../fbase";
import { ToasterContext } from "../../Ui/ToasterContext";
import AuthorForm from "../AuthorForm";
import firebase from "firebase/compat/app";
import BookAuthor from "./BookAuthor";
const BookAuthors = ({ book, id }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [author, setAuthor] = useState({
    name: "",
    photos: "",
    description: "",
  });
  const { addToast } = useContext(ToasterContext);

  const resizeImg = async (photo) => {
    const canvas = document.getElementById("canvas");
    canvas.width = 250;
    canvas.height = 250;
    const ctx = canvas.getContext("2d");
    const img = await createImg(photo);

    const scale = Math.min(
      canvas.width / img.width,
      canvas.height / img.height
    );
    console.log(scale);
    //Math 메소드 활용하여 배율을 정해줌.
    let x = canvas.width / 2 - (img.width / 2) * scale;
    let y = canvas.height / 2 - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      });
    });
  };

  const createImg = (photo) => {
    const img = new Image();
    img.src = author.photos;
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
    });
  };

  const onSubmit = async (author, e) => {
    e.preventDefault();
    if (!author.name || !author.photos || !author.description) {
      setError("모든 항목을 기입해 주십시오");
      addToast({ text: "작가 정보 등록에 실패하였습니다.", type: "error" });
      setTimeout(() => {
        setError("");
      }, 3 * 1000);
    } else {
      setLoading(true);
      try {
        const blob = await resizeImg(author.photos);
        console.log(blob);

        await dbService
          .collection("books")
          .doc(id)
          .update({
            authors: firebase.firestore.FieldValue.arrayUnion(author),
          });
        addToast({ text: "작가 정보가 등록되었습니다", type: "success" });
      } catch (error) {
        console.error("에러가 발생하였습니다", error);
        setError("작가를 추가하는데 실패하였습니다");
        setTimeout(() => {
          setError("");
        }, 3 * 1000);
      }
    }
    setLoading(false);
  };
  return (
    <div className="bookAuthors">
      <h1> 작가 정보 </h1>
      <canvas id="canvas" />
      <p>
        {book.authors
          ? book.authors.map((author) => <BookAuthor author={author} id={id} />)
          : "입력된 작가가 존재하지 않습니다"}
      </p>
      <hr />
      <h4>작가 추가하기</h4>
      <AuthorForm
        error={error}
        loading={loading}
        onSubmit={onSubmit.bind(this, author)}
        author={author}
        setAuthor={setAuthor}
      />
    </div>
  );
};

export default BookAuthors;
