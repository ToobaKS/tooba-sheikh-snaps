import tags from "../../data/tags.json";
import "./Filters.scss";

function Filters({ filterPhotos }) {
  return (
    <section className="filters">
      {tags.map((tag) => {
        return (
          <button className="filters__button" onClick={() => filterPhotos(tag)}>
            {tag}
          </button>
        );
      })}
    </section>
  );
}

export default Filters;
