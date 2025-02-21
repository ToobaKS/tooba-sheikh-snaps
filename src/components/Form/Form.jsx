import { useState } from "react";
import "./Form.scss";
import axios from "axios";

function Form({ id, postComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const isFormValid = () => {
    if (!name || !comment) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const com = {
      name: name,
      comment: comment,
    };

    if (isFormValid()) {
      postComment(com);
    } else {
      alert("eeee");
    }
  };

  return (
    <form id="commentsForm" className="form" onSubmit={handleSubmit}>
      <label className="form__input-label">Name</label>
      <input
        id="name-box"
        className="form__input"
        name="name"
        type="text"
        onChange={handleChangeName}
      />
      <label className="form__input-label">Comment</label>
      <textarea
        id="comment-box"
        className="form__input form__input--large"
        name="comment"
        type="text"
        onChange={handleChangeComment}
      ></textarea>
      <button className="form__submit">SUBMIT</button>
    </form>
  );
}

export default Form;
