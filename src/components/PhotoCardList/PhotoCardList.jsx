import "./PhotoCardList.scss";
import photos from "../../data/photos.json";
import PhotoCard from "../PhotoCard/PhotoCard";

function PhotoCardList({selectedTag, isOpen}) {
  
  const filteredPhotos = photos.filter((photo) => {
    if (!selectedTag) {
      return photos;
    } else {
      return photo.tags.some((tag) => selectedTag.includes(tag));
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
            isOpen={isOpen}
            id={photo.id}
          />
        );
      })}
    </section>
  );
}

export default PhotoCardList;
