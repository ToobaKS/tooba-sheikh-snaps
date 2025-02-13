import "./Tags.scss";

function Tags({ handleFilterPhotos = () => {}, tags = [] }) {
  return (
    <section className="tags">
      {tags.map((tag, index) => {
        return (
          <button
            key={index}
            className="tags__button"
            onClick={() => handleFilterPhotos(tag)}
          >
            {tag}
          </button>
        );
      })}
    </section>
  );
}

export default Tags;
