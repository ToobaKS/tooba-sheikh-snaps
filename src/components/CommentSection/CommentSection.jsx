import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
import "./CommentSection.scss";

function CommentSection({ id }) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    fetchComments();
  }, [comments]);

  if (!comments) {
    return <div>loading...</div>;
  }

  async function fetchComments() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=139c5912-5d4a-4e27-95df-9103530e2199`
    );
    data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setComments(data);
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
