import "./PhotoPage.scss";
import { useParams } from "react-router-dom";
import PhotoDetails from "../../components/PhotoDetails/PhotoDetails";
import Form from "../../components/Form/Form";
import CommentSection from "../../components/CommentSection/CommentSection";
import { useState, useEffect } from "react";
import axios from "axios";

function PhotoPage() {
  const { id } = useParams();
  const [comments, setComments] = useState("");

  async function fetchComments() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=139c5912-5d4a-4e27-95df-9103530e2199`
    );
    data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setComments(data);
  }

  async function postComment(com) {
    try {
      const request = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=139c5912-5d4a-4e27-95df-9103530e2199`;
      await axios.post(request, com);
      fetchComments();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <main className="photo-page-content">
      <PhotoDetails id={id} />
      <Form postComment={postComment} />
      <CommentSection comments={comments} />
    </main>
  );
}

export default PhotoPage;
