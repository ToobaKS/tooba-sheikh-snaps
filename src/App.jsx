import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import Hero from "./components/Hero/Hero";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList";
import Footer from "./components/Footer/Footer";
import photos from "./data/photos.json";

function FilterButton() {
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Click Filters</button>
      {isOpen && (
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [selectedFilter, setSelectedFilter] = useState(null);

  const filteredPhotos = photos.filter((photo) =>
    photo.tags.some((tag) => selectedFilter.includes(tag))
  );

  return (
    <>
      <Header openDrawer={openDrawer} />
      {isOpen && <FilterContainer setSelectedFilter={setSelectedFilter}/>}
      <Hero />
      <PhotoCardList photos={photos} />
      <Footer />
    </>
  );
}

export default App;
