import "./PhotoPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotoDetails from "../../components/PhotoDetails/PhotoDetails";
import Form from "../../components/Form/Form";
import CommentSection from "../../components/CommentSection/CommentSection";

function PhotoPage() {
  const { id } = useParams();

  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetchPhoto();
  }, []);

  async function fetchPhoto() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=1c1459ab-a5fe-4f24-a3d6-a9b6f153981e`
    );
    setPhoto(data);
  }

  if (!photo) {
    return <div>loading...</div>;
  }

  return (
    <main className="page-content">
      <PhotoDetails photo={photo}/>
      <Form />
      <CommentSection id={id} />
    </main>
  );
}

export default PhotoPage;
