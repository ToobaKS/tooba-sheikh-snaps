import tags from "../../data/tags.json";
import "./FilterContainer.scss";
import Tags from "../Tags/Tags";

function FilterContainer({ setSelectedTag, selectedTag }) {
  const handleFilterTags = (tag) => {
    setSelectedTag(function (prevFilter) {
      if (prevFilter === tag) {
        return null;
      } else {
        return tag;
      }
    });
  };

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
