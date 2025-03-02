import "./PhotoDetails.scss";
import Tags from "../Tags/Tags";
import icon from "../../assets/images/Like_Outline.svg";
import { formatDate } from "../../util/formatDate";
import { useEffect, useState } from "react";
import axios from "axios";

function PhotoDetails({ id }) {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetchPhoto();
  }, []);

  async function fetchPhoto() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/photos/${id}`
      );

      setPhoto(data);
    } catch (error) {
      console.error("Error fetching photo:", error);
    }
  }

  if (!photo) {
    return <div>loading...</div>;
  }

  const formattedDate = formatDate(photo.timestamp);

  return (
    <div className="photo-details">
      <div className="photo-details__content">
        <img
          className="photo-details__image"
          src={photo.photo}
          alt={photo.alt}
        />
      </div>
      <div className="photo-details__tags-unclickable">
        <Tags tags={photo.tags} isClickable={false} isOnPhotoPage={true} />
      </div>
      <div className="photo-details__photo-details">
        <div className="photo-details__like-date">
          <div className="photo-details__likes">
            <img
              className="photo-details__like-icon"
              src={icon}
              alt="like-unfilled"
            />
            <p className="photo-details__number-likes">{photo.likes} likes</p>
          </div>
          <p className="photo-details__photographer-name">
            Photo by {photo.photographer}
          </p>
        </div>
        <p className="photo-details__date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default PhotoDetails;
