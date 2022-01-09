import Navbar from '../components/Navbar'
import '/styles/globals.css'
import ContextWrapper from '../components/ContextWrapper'
import { useState, useEffect } from 'react'
import axios from 'axios'

function MyApp({ Component, pageProps }) {
  const API = "http://localhost:3001"
  const [initialized, setInitialized] = useState(false) // setup for localStorage
  const [users, setUsers] = useState([])

  useEffect(() => {
    // setup for localStorage
    setInitialized(true)

    // load in user data
    axios({
      method: 'GET',
      url: `${API}/users/`,
    }).then((response) => {
      // console.log(response.data); //TEMP
      setUsers(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      {initialized &&
        <ContextWrapper>
          <Navbar />
          <Component {...pageProps} />
        </ContextWrapper>
      }
    </>
  )
}

export default MyApp
