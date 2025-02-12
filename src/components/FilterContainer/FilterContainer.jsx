import "./FilterContainer.scss";
import Filters from "../Filters/Filters";

function FilterContainer({filterPhotos}){
    return(
        <section>
            <Filters filterPhotos={filterPhotos} />
        </section>
    );
}

export default FilterContainer;