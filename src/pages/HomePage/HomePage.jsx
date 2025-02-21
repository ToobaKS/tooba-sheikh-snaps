import "./HomePage.scss";
import { useState } from "react";
import FilterContainer from "../../components/FilterContainer/FilterContainer";
import Hero from "../../components/Hero/Hero";
import PhotoCardList from "../../components/PhotoCardList/PhotoCardList";

function HomePage({ isOpen }) {
  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <main className="home-page">
      {isOpen && (
        <FilterContainer
          setSelectedTag={setSelectedTag}
          selectedTag={selectedTag}
        />
      )}
      <div className="home-page__content">
        <Hero />
        <PhotoCardList selectedTag={selectedTag} isOpen={isOpen} />
      </div>
    </main>
  );
}

export default HomePage;
