import { useState } from "react";
import "./Form.scss";
import axios from "axios";

function Form({ id }) {
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
    console.log(event);
    if (isFormValid()) {
      postComment();
    } else {
      alert("eeee");
    }
  };

  async function postComment() {
    try {
      const com = {
        name: name,
        comment: comment,
      };

      const request = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=139c5912-5d4a-4e27-95df-9103530e2199`;
      const response = await axios.post(request, com);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

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
