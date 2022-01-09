import Navbar from '../components/Navbar'
import '/styles/globals.css'
import ContextWrapper from '../components/ContextWrapper'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [initialized, setInitialized] = useState(false)
  useEffect(() => {
    setInitialized(true)
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
