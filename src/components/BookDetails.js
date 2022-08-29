import React, { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";
import { dbService } from "../fbase";
import BookAuthors from "./book-details/BookAuthors";
import BookGeneral from "./book-details/BookGeneral";
import BookMenu from "./book-details/BookMenu";
import BookPhotos from "./book-details/BookPhotos";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  useEffect(() => {
    try {
      dbService
        .collection("books")
        .doc(id)
        .onSnapshot((snapshot) => {
          setBook(snapshot.data());
        });
    } catch (error) {
      console.error(error.message);
    }
  }, [id]);
  return (
    <div className="BookDetails">
      <BookMenu id={id} />
      {book ? (
        <Routes>
          <Route path="" exact element={<BookGeneral book={book} id={id} />} />
          <Route path="authors" element={<BookAuthors book={book} id={id} />} />
          <Route path="photos" element={<BookPhotos book={book} />} />
        </Routes>
      ) : (
        "저장된 내역이 존재하지 않습니다"
      )}
    </div>
  );
};

export default BookDetails;
