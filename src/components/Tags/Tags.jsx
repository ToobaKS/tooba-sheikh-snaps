import "./Tags.scss";

function Tags({ handleFilterPhotos, tags}) {
  return (
    <section className="filters">
      {tags.map((tag, index) => {
        return (
          <button key={index} className="filters__button" onClick={() => handleFilterPhotos(tag)}>
            {tag}
          </button>
        );
      })}
    </section>
  );
}

export default Tags;
