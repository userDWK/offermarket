import React, { useEffect, useState } from "react";
import { dbService } from "../fbase";
import AddBook from "./AddBook";
import BookItem from "./BookItem";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const loadData = () => {
    dbService.collection("books").onSnapshot((snapshot) => {
      setBooks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="bookList">
      <AddBook />
      <div className="book-list">
        <h2>책 목록</h2>
        {!books.length
          ? "목록이 존재하지 않습니다"
          : books.map((book) => {
              return (
                <div className="book-item" key={book.id}>
                  <BookItem book={book} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default BookList;
