import Image from 'next/image'
import logo from '../../../public/logo.png'
import Entry from './Entry'
import { entriesData } from "../../../entryData"

function MyEntries() {
  return (
    <div>
      <div className="h-screen ml-3 mt-4 pr-3">
        {entriesData.map((entry) =>
          <Entry key={entry.id} entry={entry} />
        )}
      </div>
      

    </div>
  )
}

export default MyEntries

