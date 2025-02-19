import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function PhotoPage() {
  const { id } = useParams();

  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    fetchPhoto();
  }, []);

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchPhoto() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e`
    );
    setPhoto(data);
  }

  async function fetchComments() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e`
    );
    setComments(data);
  }

  if (!photo || !comments) {
    return <div>loading...</div>;
  }

  console.log(photo);

  return (
    <div>
      photo -- {id}
      <div>title: {photo.photoDescription}</div>
      <div>num comments: {comments.length}</div>
      <div>
        <Link to="/">back</Link>
      </div>
    </div>
  );
}

export default PhotoPage;
