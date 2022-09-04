import React, { useContext } from "react";
import { dbService, storageService } from "../../fbase";
import { ToasterContext } from "../../Ui/ToasterContext";
import firebase from "firebase/compat/app";
import profileImg from "../../Ui/profile-placeholder.png";
const BookAuthor = ({ author, id }) => {
  const { addToast } = useContext(ToasterContext);
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      if (author.photos !== "")
        await storageService.refFromURL(author.photos).delete();
      await dbService
        .collection("books")
        .doc(id)
        .update({
          authors: firebase.firestore.FieldValue.arrayRemove(author),
        });
      addToast({ text: "선택한 작가가 삭제되었습니다", type: "success" });
    } catch (error) {
      console.error(error);
      addToast({ text: "삭제에 실패하였습니다", type: "error" });
    }
  };
  return (
    <>
      <p>
        {author.name} -{" "}
        <a href="#" onClick={handleDelete}>
          삭제
        </a>
      </p>
    </>
  );
};

export default BookAuthor;
