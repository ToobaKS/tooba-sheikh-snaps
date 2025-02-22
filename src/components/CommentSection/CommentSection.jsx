import Comment from "../Comment/Comment";
import "./CommentSection.scss";

function CommentSection({ comments }) {

  if (!comments) {
    return <div>loading...</div>;
  }
  
  return (
    <section className="comment-section">
      <h3 className="comment-section__heading">{comments.length} Comments</h3>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </section>
  );
}

export default CommentSection;
