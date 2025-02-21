import { useState, useEffect } from "react";
import axios from "axios";
import "./FilterContainer.scss";
import Tags from "../Tags/Tags";

function FilterContainer({ setSelectedTag, selectedTag }) {
  const [tags, setTags] = useState("");

  async function fetchTags() {
    const { data } = await axios.get(
      "https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=139c5912-5d4a-4e27-95df-9103530e2199"
    );
    setTags(data);
  }

  useEffect(() => {
    fetchTags();
  }, []);

  const handleFilterTags = (tag) => {
    setSelectedTag(function (prevFilter) {
      if (prevFilter === tag) {
        return null;
      } else {
        return tag;
      }
    });
  };

  if (!tags) {
    return <div>loading...</div>;
  }

  return (
    <section className="filter-container">
      <h2 className="filter-container__heading">Filters</h2>
      <div className="filter-container__tags">
        <Tags
          handleFilterTags={handleFilterTags}
          tags={tags}
          isClickable={true}
          selectedTag={selectedTag}
        />
      </div>
    </section>
  );
}

export default FilterContainer;

// {`filter-container ${
//   isOpen ? " filter-container--open" : "filter-container--closed"
// }`}
