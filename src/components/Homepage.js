import Head from 'next/head'
import Link from 'next/link'

const countries = [
  { c: 'Japan', rating: '4.5' },
  { c: 'France', capital: 'Paris', rating: '4.7' },
  { c: 'Canada', capital: 'Ottawa', rating: '4.6' },
  { c: 'China', capital: 'Beijing', rating: '4.1' },
]

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Atlas</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <p className='mt-10 text-3xl text-center text-rose-500 font-bold underline'>
        Hi team! Here's our Homepage!
      </p>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
          {countries.map((e) => (
            <div className='mb-3' key={e.c}>
              <Link as={`countries/${e.c}`} href='/countries/[country]'>
                <a>
                  <div className='p-4 mt-4 text-center border w-52 rounded-xl hover:text-white hover:bg-gray-800'>
                    <div>{e.c}</div>
                    <div>{e.capital}</div>
                    <div>Rating: {e.rating}</div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>

        <button className='bg-rose-400 hover:bg-green-500 text-white hover:text-white font-bold py-2 px-4 rounded'>
          This is a button.
        </button>
      </main>
    </div>
  )
}
