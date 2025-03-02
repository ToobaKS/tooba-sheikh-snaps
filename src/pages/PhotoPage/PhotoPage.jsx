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
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/photos/${id}/comments`);
      data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
      setComments([]);
    }
  }

  async function postComment(com) {
    try {
      const request = `${URL}/photos/${id}/comments`;
      await axios.post(request, com);
      fetchComments();
    } catch (error) {
      console.error("Error posting comment:", error);
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
