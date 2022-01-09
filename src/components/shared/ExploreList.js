import { exploreData } from "../../../exploreData";
import ExploreEntry from "./ExploreEntry";

function ExploreList() {
    return (
        <div>
            <div className="h-screen ml-3 mt-4 pr-3">
                {exploreData.map((exploreEntry) =>
                    <ExploreEntry key={exploreEntry.id} exploreEntry={exploreEntry} />
                )}
            </div>
        </div>
    )
}

export default ExploreList