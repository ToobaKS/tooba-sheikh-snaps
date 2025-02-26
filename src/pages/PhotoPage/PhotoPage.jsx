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

  const URL = "http://localhost:8080";

  async function fetchComments() {
    const {data}  = await axios.get(`${URL}/photos/${id}/comments`);
    console.log(data);
    data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setComments(data);
  }

  async function postComment(com) {
    try {
      const request = `${URL}/photos/${id}/comments`;
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
