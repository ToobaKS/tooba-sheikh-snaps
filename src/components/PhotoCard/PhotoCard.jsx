import "./PhotoCard.scss";
import Tags from "../Tags/Tags";

function PhotoCard({ url, alt, photographer, tags }) {
  return (
    <div className="photos__photo">
      <img className="photos__image" src={url} alt={alt} />
      <h2 className="photos__photographer">{photographer}</h2>

      <div className="photos__tags">
        <Tags tags={tags} />
      </div>
    </div>
  );
}

export default PhotoCard;
