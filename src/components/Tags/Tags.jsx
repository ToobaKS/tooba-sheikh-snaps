import "./Tags.scss";

function Tags({
  handleFilterTags = () => {},
  tags = [],
  isClickable = false,
  selectedTag = null,
  isOnPhotoPage = false
}) {
  return (
    <>
      {tags.map((tag, index) => {
        return (
          <button
            key={index}
            className={`tag${isClickable ? " tag__clickable" : ""}${
              isClickable && selectedTag === tag ? " tag__selected" : ""
            }${isOnPhotoPage ? " tag__photo-page" : ""}`}
            onClick={() => handleFilterTags(tag)}
          >
            {tag}
          </button>
        );
      })}
    </>
  );
}

export default Tags;
