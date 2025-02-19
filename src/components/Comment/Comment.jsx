import "./Comment.scss";

function Comment({ comment }) {
  return( 
    <div className="comment">
        <div className="comment__header">
            <p className="comment__name">{comment.name}</p>
            <p className="comment__date">{(new Date(comment.timestamp)).toLocaleDateString(comment.timestamp)}</p>
        </div>
        <p className="comment__comment">
            {comment.comment}
        </p>
    </div>
  );
}

export default Comment;
