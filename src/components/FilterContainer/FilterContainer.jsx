import tags from "../../data/tags.json";
import "./FilterContainer.scss";
import Tags from "../Tags/Tags";

function FilterContainer({ handleFilterPhotos, selectedTag }) {
  return (
    <section className="filter-container">
      <h2 className="filter-container__heading">Filters</h2>
      <div className="filter-container__tags">
      <Tags
        handleFilterPhotos={handleFilterPhotos}
        tags={tags}
        isClickable={true}
        selectedTag={selectedTag}
      />
      </div>
    </section>
  );
}

export default FilterContainer;
