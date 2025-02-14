import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import Hero from "./components/Hero/Hero";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList";
import Footer from "./components/Footer/Footer";

function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  const toggleFilterContainer = () => {
    setIsOpen(!isOpen);
  };

 
  const handleFilterPhotos = (tag) => {
    setSelectedTag(function (prevFilter) {
      if (prevFilter === tag) {
        return null; // If the same filter is clicked again, remove it
      } else {
        return tag; // Otherwise, set the new filter
      }
    });
  };

  return (
    <>
      <Header toggleFilterContainer={toggleFilterContainer} isOpen={isOpen} />
      {isOpen && <FilterContainer handleFilterPhotos={handleFilterPhotos} selectedTag={selectedTag} />}
      <Hero />
      <PhotoCardList selectedTag={selectedTag} />
      <Footer />
    </>
  );
}

export default App;
