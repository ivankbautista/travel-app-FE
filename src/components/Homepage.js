import Head from 'next/head'
import Link from 'next/link';
import { Notification } from './shared/Notification';
import { Alert } from './shared/Alert';
import { CardBody } from './CardBody';

const countries = [
  {c: 'Japan', rating: '4.5', imageUrl: "https://i.pinimg.com/736x/25/87/ec/2587ec34faa3b4bff7dbc7a2aa1692b1.jpg"},
  {c: 'France', rating: '4.7', imageUrl: "https://i.pinimg.com/originals/a6/16/ac/a616acdb23764bc88a45124c91dfdd73.jpg"},
  {c: 'Canada', rating: '4.6', imageUrl: "https://i.pinimg.com/736x/08/6d/31/086d3111eb7031dfe46e1466b6dde966--canada-travel-alberta-travel-canada.jpg"},
  {c: 'China', rating: '4.1', imageUrl: "https://i.pinimg.com/originals/3d/a7/43/3da743e11b42f91982bd1e754dcc5bcf.png"}
]

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Atlas</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Notification title="congrats!" body="you logged in"/>
      <Alert title="oh no!" body="something's wrong"/>
      <p className='mt-10 text-3xl text-center text-rose-500 font-bold underline'>
        Hi team! Here's our Homepage!
      </p>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        {countries.map(e =>
          <Link as={`countries/${e.c}`} href="/countries/[country]">
            <CardBody country={e.c} rating={e.rating} imageUrl= {e.imageUrl} />
          </Link>
        )}
      </div>
      <br />
      <button className="bg-rose-400 hover:bg-green-500 text-white hover:text-white font-bold py-2 px-4 rounded">
        This is a button.
      </button>
      
      </main>
    </div>
  )
}
