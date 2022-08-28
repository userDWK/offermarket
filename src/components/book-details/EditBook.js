import React, { useEffect, useState } from "react";
import { Button, Field, Message, Modal } from "../../Ui";
import { ToasterContext } from "../../Ui/ToasterContext";
import { dbService } from "../../fbase";
const EditBook = ({ book, id }) => {
  const [bookTitle, setBookTitle] = useState(book.title);
  const [bookPage, setBookPage] = useState(book.pages);
  const [bookPublish, setBookPublish] = useState(book.publish);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputData = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "title") {
      setBookTitle(value);
    } else if (name === "pages") {
      setBookPage(value);
    } else if (name === "publish-date") {
      setBookPublish(value);
    }
  };
  const handdleBook = async (addToast, e) => {
    e.preventDefault();
    if (!bookPage || !bookTitle || !bookPublish) {
      setError("모든 데이터를 입력해 주십시오");
      setTimeout(() => {
        setError("");
      }, 3 * 1000);
    } else {
      setLoading(true);
      const data = {
        title: bookTitle,
        pages: parseInt(bookPage),
        publish: bookPublish,
      };
      try {
        await dbService.collection("books").doc(id).set(data, { merge: true });
        addToast({ text: "수정 되었습니다.", type: "success" });
      } catch (error) {
        addToast({ text: "수정에 실패하였습니다", type: "error" });
        setError(error.message);
        setTimeout(() => {
          setError("");
        }, 3 * 1000);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    setBookTitle(book.title);
    setBookPage(book.pages);
    setBookPublish(book.publish);
  }, [book]);
  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <>
          <form onSubmit={handdleBook.bind(this, addToast)}>
            <Field labelText="제목 : " id="book-title">
              <input
                type="text"
                name="title"
                id="book-title"
                value={bookTitle}
                placeholder="제목"
                onChange={inputData}
              />
            </Field>

            <Field labelText="페이지 수 : " id="book-pages">
              <input
                type="number"
                name="pages"
                id="book-pages"
                value={bookPage}
                placeholder="페이지 수"
                onChange={inputData}
              />
            </Field>

            <Field labelText="출판일 : " id="book-publish-date">
              <input
                type="date"
                name="publish-date"
                value={bookPublish}
                id="book-publish-date"
                onChange={inputData}
              />
            </Field>

            <Button type="submit" disabled={loading}>
              저장하기
            </Button>

            <Message text={error} type="error" />
          </form>
        </>
      )}
    </ToasterContext.Consumer>
  );
};

export default EditBook;
