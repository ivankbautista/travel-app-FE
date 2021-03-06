import { useEffect, useState } from 'react' 
import axios from 'axios'
import { useRouter, Router } from 'next/router'
import Roll from './Roll'

function MyRolls({ currentUser }) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [rolls, setRolls] = useState()

  const API = "http://localhost:3001"

  useEffect(() => {
    if(!router.isReady) return
      axios({
        method: 'GET',
        url: `${API}/api/v1/rolls/user/${currentUser.id}`,
      })
        .then(function (response) {
          console.log(response.data)
          setRolls(response.data)
          setLoading(false)
        })
    }, [router.isReady]);

    if (isLoading) {
      return <div className="App">Loading...</div>
    }

    // http://localhost:3001/api/v1/rolls/user/[user_id]

  return (
    <>
      <div className="h-[30vh] bg-atlas-200 mt-4 overflow-y-scroll p-4">
        {rolls.map((roll) => 
          <Roll key={roll.id} roll={roll} />
        )}
      </div>
    </>
  )
}

export default MyRolls