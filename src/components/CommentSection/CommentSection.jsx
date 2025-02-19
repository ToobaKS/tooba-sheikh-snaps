import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../Comment/Comment";

function CommentSection({ id }) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    fetchComments();
  }, []);

  if (!comments) {
    return <div>loading...</div>;
  }

  async function fetchComments() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e`
    );
    setComments(data);
  }

  return (
    <section className="comment-section">
      {comments.map((comment) => {
        return (
          <Comment key={comment.id} comment={comment}/>
        );
      })}
    </section>
  );
}

export default CommentSection;