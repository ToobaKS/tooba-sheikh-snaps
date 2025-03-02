import { useState, useEffect } from "react";
import axios from "axios";
import "./FilterContainer.scss";
import Tags from "../Tags/Tags";

function FilterContainer({ setSelectedTag, selectedTag }) {
  const [tags, setTags] = useState("");

  async function fetchTags() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/tags`);
      setTags(response.data);
    } catch (error) {
      console.error("Error fetching tags:", error);
      setTags([]);
    }
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
