import { server } from '../config'
import { Notification } from './shared/Notification';
import { Alert } from './shared/Alert';
import CountryList from './shared/CountryList';

export default function HomePage({ countries }) {
  return (
    <div>
      <p className='mt-10 text-3xl text-center text-rose-500 font-bold underline font-display'>
        Hi team! Here's our Homepage!
      </p>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div>
          <CountryList countries={countries} />
        </div>
        <br />
        <button className="bg-rose-400 hover:bg-green-500 text-white hover:text-white font-bold py-2 px-4 rounded">
          This is a button.
        </button>

      </main>
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