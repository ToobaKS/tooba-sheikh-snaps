import axios from "axios";
import "./PhotoCardList.scss";
import { useState, useEffect } from "react";
import PhotoCard from "../PhotoCard/PhotoCard";

function PhotoCardList({ selectedTag, isOpen }) {
  const [photos, setPhotos] = useState(null);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    if (!selectedTag) {
      setFilteredPhotos(photos);
    } else {
      setFilteredPhotos(
        photos.filter((photo) =>
          photo.tags.some((tag) => selectedTag.includes(tag))
        )
      );
    }
  }, [photos, selectedTag]);

  async function fetchPhotos() {
    const { data } = await axios.get(
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=139c5912-5d4a-4e27-95df-9103530e2199"
    );
    setPhotos(data);
  }

  if (!filteredPhotos) {
    return <div>loading...</div>;
  }

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
