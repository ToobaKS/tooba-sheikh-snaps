import "./Comment.scss";
import { formatDate } from "../../util/formatDate";

function Comment({ comment }) {
  const formattedDate = formatDate(comment.timestamp);

  return (
    <div className="comment">
      <div className="comment__header">
        <p className="comment__name">{comment.name}</p>
        <p className="comment__date">{formattedDate}</p>
      </div>
      <p className="comment__comment">{comment.comment}</p>
    </div>
  );
}

export default Comment;
