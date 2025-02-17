import "./PhotoCard.scss";
import Tags from "../Tags/Tags";

function PhotoCard({ url, alt, photographer, tags, isOpen }) {
  return (
    <div className={`photo ${isOpen ? " photo--open" : ""}`}>
      <div className="photo__content">
        <img className="photo__image" src={url} alt={alt} />
        <h2 className="photo__photographer">{photographer}</h2>
      </div>

      <div className="photo__tags">
        <Tags tags={tags} isClickable={false} />
      </div>
    </div>
  );
}

export default PhotoCard;
