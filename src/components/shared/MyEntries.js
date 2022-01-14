import Entry from './Entry'
import { entriesData } from "../../../entryData"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { useRouter } from 'next/router'

function MyEntries() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true)
  const [currentEntry, setCurrentEntry] = useState()
  const username = router.query.username
  const API = "http://localhost:3001"
  console.log(username)
  
  // http://localhost:3001/api/v1/entries/user/[user_id]

  useEffect(() => {
    if(!router.isReady) return
      axios({
        method: 'GET',
        url: `${API}/api/v1/entries/user/${username}`,
      })
        .then(function (response) {
          console.log(response.data)
          setCurrentEntry(response.data)
          setLoading(false)
        })
  }, [router.isReady])

  if (isLoading) {
    return <div className="text-white">Loading...</div>
  }



  return (
    <>
      <div className="h-screen mt-4">
        {currentEntry.map((entry) =>
          <Entry key={entry.id} entry={entry} />
        )}
      </div>
    </>
  )
}

export default MyEntries

