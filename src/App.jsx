import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import Hero from "./components/Hero/Hero";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList";
import Footer from "./components/Footer/Footer";

function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const toggleFilterContainer = () => {
    setIsOpen(!isOpen);
  };

 
  const handleFilterPhotos = (tag) => {
    setSelectedFilter(function (prevFilter) {
      if (prevFilter === tag) {
        return null; // If the same filter is clicked again, remove it
      } else {
        return tag; // Otherwise, set the new filter
      }
    });
  };

  return (
    <>
      <Header toggleFilterContainer={toggleFilterContainer} />
      {isOpen && <FilterContainer handleFilterPhotos={handleFilterPhotos} />}
      <Hero />
      <PhotoCardList selectedFilter={selectedFilter} />
      <Footer />
    </>
  );
}

export default App;
