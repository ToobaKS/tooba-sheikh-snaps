import "./PhotoDetails.scss";
import Tags from "../Tags/Tags";
import icon from "../../assets/images/Like_Outline.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function PhotoDetails({ id }) {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetchPhoto();
  }, []);

  async function fetchPhoto() {
    const { data } = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=139c5912-5d4a-4e27-95df-9103530e2199`
    );
    setPhoto(data);
  }

  if (!photo) {
    return <div>loading...</div>;
  }

  return (
    <div className="photo">
      <div className="photo__content">
        <img className="photo__image" src={photo.photo} alt={photo.alt} />
      </div>
      <div className="photo__tags-unclickable">
        <Tags tags={photo.tags} isClickable={false} />
      </div>
      <div className="photo__photo-details">
        <div className="photo__like-date">
          <div className="photo__likes">
            <img className="photo__like-icon" src={icon} alt="like-unfilled" />
            <p className="photo__number-likes">{photo.likes} likes</p>
          </div>
          <p className="photo__photographer-name">
            Photo by {photo.photographer}
          </p>
        </div>
        <p className="photo__date">
          {new Date(photo.timestamp).toLocaleDateString(photo.timestamp)}
        </p>
      </div>
    </div>
  );
}

export default PhotoDetails;
