import "./PhotoCard.scss";

function PhotoCard({ url, alt, photographer, tags }) {
  return (
    <div className="photos__photo">
      <img className="photos__image" src={url} alt={alt} />
      <h2 className="photos__photographer">{photographer}</h2>

      <ul className="photos__tags">
        {tags.map((tag, index) => {
          return <li key={index} className="photos__tag">{tag}</li>;
        })}
      </ul>
    </div>
  );
}

export default PhotoCard;
