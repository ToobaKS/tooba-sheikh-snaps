import { useState } from "react";
import "./Form.scss";

function Form({ postComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const isFormValid = () => {
    if (!name.trim() || !comment.trim()) {
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
      try {
        postComment(com);
        setError(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
  };

  return (
    <form id="commentsForm" className="form" onSubmit={handleSubmit}>
      <label className="form__input-label">Name</label>
      <input
        id="name-box"
        className={`form__input ${error && !name.trim() ? "form__input--error" : ""}`}
        name="name"
        type="text"
        onChange={handleChangeName}
      />
      <label className="form__input-label">Comment</label>
      <textarea
        id="comment-box"
        className={`form__comment form__comment--large ${
          error && !comment.trim() ? "form__comment--error" : ""
        }`}
        name="comment"
        type="text"
        onChange={handleChangeComment}
      ></textarea>
      <button className="form__submit">Submit</button>
    </form>
  );
}

export default Form;
