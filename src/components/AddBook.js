import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dbService } from "../fbase";
import { Button, Field, Message, Modal } from "../Ui";
import { ToasterContext } from "../Ui/ToasterContext";

const AddBook = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookPage, setBookPage] = useState("");
  const [bookPublish, setBookPublish] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModal, setIsModal] = useState(false);

  const navigate = useNavigate();

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
        const docRef = await dbService.collection("books").add(data);
        navigate(`/book/${docRef.id}`);
        addToast({ text: "성공적으로 추가 되었습니다.", type: "success" });
      } catch (error) {
        addToast({ text: "추가에 실패하였습니다", type: "error" });
        setError(error.message);
        setTimeout(() => {
          setError("");
        }, 3 * 1000);
      }
    }
    setLoading(false);
  };

  //   onClick={() => addToast({ text: "토스트 성공", type: "success" })}
  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <>
          <Button outline onClick={() => (setIsModal(true), setError(""))}>
            책 추가하기
          </Button>
          <Modal
            title="새로운 책 추가하기"
            show={isModal}
            close={() => {
              setIsModal(false);
              setError("");
            }}
          >
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
                {loading ? "저장 중 입니다...." : "저장하기"}
              </Button>

              <Message text={error} type="error" />
            </form>
          </Modal>
        </>
      )}
    </ToasterContext.Consumer>
  );
};

export default AddBook;
