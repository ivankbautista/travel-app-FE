import Entry from './Entry'
import { entriesData } from "../../../entryData"

function MyEntries() {
  return (
    <>
      <div className="h-screen mt-4 pr-3">
        {entriesData.map((entry) =>
          <Entry key={entry.id} entry={entry} />
        )}
      </div>
    </>
  )
}

export default MyEntries

