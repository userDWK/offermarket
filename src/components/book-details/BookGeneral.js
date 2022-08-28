import React from "react";
import EditBook from "./EditBook";

const BookGeneral = ({ book, id }) => {
  return (
    <div className="BookGeneral">
      <h1>수정하기</h1>
      <p>책 제목 : {book.title}</p>
      <hr />
      <EditBook book={book} id={id} />
    </div>
  );
};

export default BookGeneral;
