import LocationFilter from "./LocationFilter";
import SaveAndSearch from "./save_and_search";


export default function Filters() {
    return (
        <>
            <div>
                <SaveAndSearch/>
                <LocationFilter/>
            </div>
        </>
    )
}