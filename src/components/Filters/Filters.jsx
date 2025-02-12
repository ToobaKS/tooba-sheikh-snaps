import tags from "../../data/tags.json";
import "./Filters.scss";

function Filters({setSelectedFilter}) {
  return (
    <section className="filters">
      {tags.map((tag) => {
        return (
          <button
            className="filters__button"
            onClick={() => setSelectedFilter(tag)}
          >
            {tag}
          </button>
        );
      })}
    </section>
  );
}

export default Filters;
