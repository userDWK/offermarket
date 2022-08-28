import { Link } from "react-router-dom";

const BookItem = ({ book }) => {
  return (
    <div className="bookItem" key={book.id}>
      <br />
      <h1>
        <Link to={`/book/${book.id}`}>{book.title}</Link>
      </h1>
      <span>
        <strong>책 제목: </strong> {book.title}
      </span>
      <br />
      <span>
        <strong>페이지 수: </strong>
        {book.pages}
      </span>
      <br />
      <span>
        <strong>출판사: </strong>
        {book.publish}
      </span>
    </div>
  );
};

export default BookItem;
