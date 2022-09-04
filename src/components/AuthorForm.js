import React, { useState } from "react";
import { Button, Field, Message } from "../Ui";
import profileImg from "../Ui/profile-placeholder.png";

const AuthorForm = ({ error, loading, onSubmit, author, setAuthor }) => {
  const handleChange = (e) => {
    setAuthor({
      ...author,
      [e.target.name]: e.target.value,
    });
  };
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setAuthor({
        ...author,
        photos: e.target.result,
      });
    };
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Field labelText="작가 이름" id="author-name">
          <input
            type="text"
            name="name"
            id="author-name"
            placeholder="이름"
            onChange={handleChange}
            value={author.name}
          />
        </Field>
        <Field labelText="사진" id="author-photo">
          <div>
            <figure>
              <img
                src={author.photos === "" ? profileImg : author.photos}
                width="120"
                alt=""
              />
            </figure>
            <input
              type="file"
              name="photos"
              id="author-photo"
              accept="image/*"
              onChange={handleFile}
            />
          </div>
        </Field>
        <Field labelText="설명" id="author-description">
          <textarea
            name="description"
            id="author-description"
            rows="8"
            onChange={handleChange}
            value={author.description}
          />
        </Field>
        <Message text={error} type="error" />
        <Button loading={loading} type="submit">
          작가 추가하기
        </Button>
      </form>
    </div>
  );
};

export default AuthorForm;
