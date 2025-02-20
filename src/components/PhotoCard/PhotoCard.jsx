import "./PhotoCard.scss";
import Tags from "../Tags/Tags";
import { Link } from "react-router-dom";

function PhotoCard({ url, alt, photographer, tags, id, isOpen }) {
  return (
    <div className={`photo ${isOpen ? " photo--open" : "photo--closed"}`}>
      <div className="photo__content">
        <Link to={`/photo/${id}`}>
          <img className="photo__image" src={url} alt={alt} />
        </Link>
         <h2 className="photo__photographer">{photographer}</h2>
      </div>

      <div className="photo__tags">
        <Tags tags={tags} isClickable={false} />
      </div>
    </div>
  );
}

export default PhotoCard;
