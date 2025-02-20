import "./PhotoPage.scss";
import { useParams } from "react-router-dom";
import PhotoDetails from "../../components/PhotoDetails/PhotoDetails";
import Form from "../../components/Form/Form";
import CommentSection from "../../components/CommentSection/CommentSection";

function PhotoPage() {
  const { id } = useParams();

  return (
    <main className="photo-page-content">
      <PhotoDetails id={id} />
      <Form id={id} />
      <CommentSection id={id} />
    </main>
  );
}

export default PhotoPage;
