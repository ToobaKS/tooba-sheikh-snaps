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

  const URL = "http://localhost:8081";

  async function fetchPhotos() {
    try {
      const { data } = await axios.get(`${URL}/photos`);
      setPhotos(data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
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
