import { myEntriesData } from "../../../myEntries";
import CountryEntry from "./CountryEntry";

function MyCountryEntryList() {
    return (
        <div>
            <div className="h-screen ml-3 mt-4 pr-3">
                {myEntriesData.map((countryEntry) =>
                    <CountryEntry key={countryEntry.id} countryEntry={countryEntry} />
                )}
            </div>
        </div>
    )
}

export default MyCountryEntryList