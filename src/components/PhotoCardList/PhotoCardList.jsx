import "./PhotoCardList.scss";

import PhotoCard from "../PhotoCard/PhotoCard";

function PhotoCardList({photos}) {
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
