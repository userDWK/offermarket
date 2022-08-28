import React from "react";
import AuthorForm from "../AuthorForm";
const BookAuthors = ({ book }) => {
  return (
    <div className="bookAuthors">
      <h1> 작가 정보 </h1>
      <p>
        {book && book.authors
          ? book.authors[0].name
          : "입력된 작가가 존재하지 않습니다"}
      </p>
      <hr />
      <h4>작가 추가하기</h4>
      <AuthorForm />
    </div>
  );
};

export default BookAuthors;
