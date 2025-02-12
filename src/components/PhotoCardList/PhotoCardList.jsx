import "./PhotoCardList.scss";
import photos from "../../data/photos.json";
import PhotoCard from "../PhotoCard/PhotoCard";

function PhotoCardList() {
  return (
    <section className="photos">
      {photos.map((photo) => {
        return (
          <PhotoCard
            key={photo.id}
            url={photo.photo}
            alt={photo.photoDescription}
            photographer={photo.photographer}
            tags={photo.tags}
          />
        );
      })}
    </section>
  );
}

export default PhotoCardList;
