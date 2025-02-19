import "./Form.scss";

function Form() {
  return (
    <form id="commentsForm" className="form">
      <label className="form__input-label">NAME</label>
      <input
        id="name-box"
        className="form__input"
        name="name"
        type="text"
        placeholder="Enter your name"
      />
      <label className="form__input-label">COMMENT</label>
      <textarea
        id="comment-box"
        className="form__input form__input--large"
        name="comment"
        type="text"
        placeholder="Add a new comment"
      ></textarea>
      <button className="form__submit">COMMENT</button>
    </form>
  );
}

export default Form;
