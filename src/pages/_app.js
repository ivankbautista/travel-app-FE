import Navbar from '../components/Navbar'
import '/styles/globals.css'
import ContextWrapper from '../components/ContextWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextWrapper>
        <Navbar />
        <Component {...pageProps} />
      </ContextWrapper>
    </>
  )
}

export default MyApp
