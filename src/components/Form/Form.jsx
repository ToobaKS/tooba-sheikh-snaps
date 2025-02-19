import "./Form.scss";

function Form() {
  return (
    <form id="commentsForm" className="form">
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
