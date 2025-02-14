import "./Tags.scss";

function Tags({
  handleFilterPhotos = () => {},
  tags = [],
  isClickable = false,
  selectedTag = null
}) {
  return (
    <>
      {tags.map((tag, index) => {
        return (
          <button
            key={index}
            className={`tag${isClickable ? " tag__clickable" : ""}${isClickable && selectedTag === tag ? " tag__selected" : ""}`}
            onClick={() => handleFilterPhotos(tag)}
          >
            {tag}
          </button>
        );
      })}
    </>
  );
}

export default Tags;
