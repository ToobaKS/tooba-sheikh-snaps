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

  return (
    <>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <main className="page-content">
        {isOpen && (
          <FilterContainer
            setSelectedTag={setSelectedTag}
            selectedTag={selectedTag}
          />
        )}
        <Hero />
        <PhotoCardList selectedTag={selectedTag} />
      </main>
      <Footer />
    </>
  );
} 

export default App;
