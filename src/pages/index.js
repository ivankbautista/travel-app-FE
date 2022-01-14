import { server } from '../config'
import HomePage from '../components/Homepage'

export default function Home({ countries }) {
  return (
    <div>
      <HomePage countries={countries} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/countries`)
  const countries = await res.json()

  return {
    props: {
      countries
    }
  }
}