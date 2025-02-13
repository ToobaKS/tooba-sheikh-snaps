import "./PhotoCardList.scss";
import photos from "../../data/photos.json";
import PhotoCard from "../PhotoCard/PhotoCard";

function PhotoCardList({selectedFilter}) {
  
  const filteredPhotos = photos.filter((photo) => {
    if (!selectedFilter) {
      return photos;
    } else {
      return photo.tags.some((tag) => selectedFilter.includes(tag));
    }
  });
  
  return (
    <section className="photos">
      {filteredPhotos.map((photo) => {
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
