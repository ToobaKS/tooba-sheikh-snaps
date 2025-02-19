import Tags from "../Tags/Tags";

function PhotoDetails({ photo }) {
    console.log(photo);
  return (
    <div className="">
      <div className="photo__content">
        <img className="photo__image" src={photo.photo} alt={photo.alt} />
        <h2 className="photo__photographer">{photo.photographer}</h2>
      </div>

      <div className="photo__tags">
        <Tags tags={photo.tags} isClickable={false} />
      </div>
    </div>
  );
}

export default PhotoDetails;
