import tags from "../../data/tags.json";
import "./FilterContainer.scss";
import Tags from "../Tags/Tags";

function FilterContainer({handleFilterPhotos, selectedTag}){
    return(
        <section>
            <Tags handleFilterPhotos={handleFilterPhotos} tags={tags} isClickable={true} selectedTag={selectedTag} />
        </section>
    );
}

export default FilterContainer;