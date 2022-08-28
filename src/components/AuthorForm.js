import React from "react";
import { Field } from "../Ui";

const AuthorForm = () => {
  return (
    <div>
      <form>
        <Field labelText="작가 이름" id="author-name">
          <input type="text" name="name" id="author-name" placeholder="이름" />
        </Field>
        <Field labelText="사진" id="author-photo">
          <input type="file" name="photo" id="author-photo" />
        </Field>
        <Field labelText="설명 : " id="author-description">
          <textarea
            name="author-description"
            id="author-description"
            rows="8"
          />
        </Field>
      </form>
    </div>
  );
};

export default AuthorForm;
