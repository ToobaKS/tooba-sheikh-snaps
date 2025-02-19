import "./Form.scss";
import axios from "axios";

function Form({ id }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = {
      name: event.target.name.value,
      comment: event.target.comment.value,
    };
    postComment(comment);
  };

  async function postComment(comment) {
    try {
      const request = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e`;
      const response = await axios.post(request, comment);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form id="commentsForm" className="form" onSubmit={handleSubmit}>
      <label className="form__input-label">Name</label>
      <input id="name-box" className="form__input" name="name" type="text" />
      <label className="form__input-label">Comment</label>
      <textarea
        id="comment-box"
        className="form__input form__input--large"
        name="comment"
        type="text"
      ></textarea>
      <button className="form__submit">SUBMIT</button>
    </form>
  );
}

export default Form;
