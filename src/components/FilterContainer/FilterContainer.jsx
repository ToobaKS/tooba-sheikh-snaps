import "./FilterContainer.scss";
import Filters from "../Filters/Filters";

function FilterContainer({setSelectedFilter}){
    return(
        <section>
            <Filters setSelectedFilter={setSelectedFilter}/>
        </section>
    );
}

export default FilterContainer;