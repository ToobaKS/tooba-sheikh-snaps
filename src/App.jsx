import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import Hero from "./components/Hero/Hero";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList";
import Footer from "./components/Footer/Footer";
import photos from "./data/photos.json";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [selectedFilter, setSelectedFilter] = useState(null);

  const filterPhotos = (tag) => {
    setSelectedFilter(function (prevFilter) {
      if (prevFilter === tag) {
        return null; // If the same filter is clicked again, remove it
      } else {
        return tag; // Otherwise, set the new filter
      }
    });
  };

  const filteredPhotos = photos.filter((photo) => {
    if (!selectedFilter) {
      return photos;
    } else {
      return photo.tags.some((tag) => selectedFilter.includes(tag));
    }
  });

  return (
    <>
      <Header openDrawer={openDrawer} />
      {isOpen && <FilterContainer filterPhotos={filterPhotos} />}
      <Hero />
      <PhotoCardList photos={filteredPhotos} />
      <Footer />
    </>
  );
}

export default App;
