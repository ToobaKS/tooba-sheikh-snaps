import "./Tags.scss";

function Tags({
  handleFilterPhotos = () => {},
  tags = [],
  isClickable = false,
  selectedTag = null
}) {
  return (
    <section className="tags">
      {tags.map((tag, index) => {
        return (
          <button
            key={index}
            className={`tags__button${isClickable ? " tags__clickable-button" : ""}${isClickable && selectedTag === tag ? " tags__selected-button" : ""}`}
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
