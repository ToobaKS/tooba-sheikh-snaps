import tags from "../../data/tags.json";
import "./FilterContainer.scss";
import Tags from "../Tags/Tags";

function FilterContainer({handleFilterPhotos}){
    return(
        <section>
            <Tags handleFilterPhotos={handleFilterPhotos} tags={tags} />
        </section>
    );
}

export default FilterContainer;