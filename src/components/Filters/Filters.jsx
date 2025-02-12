import tags from "../../data/tags.json";
import "./Filters.scss";

function Filters() {
  return (
    <section className="filters">
      {tags.map((tag) => {
        return <button className="filters__button">{tag}</button>;
      })}
    </section>
  );
}

export default Filters;
