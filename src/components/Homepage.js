import { server } from '../config'
import { Notification } from './shared/Notification';
import { Alert } from './shared/Alert';
import CountryList from './shared/CountryList';

export default function HomePage({ countries }) {
  return (
    <div>
        <div className="h-[92vh] bg-gradient-to-tr from-atlas-700 to-atlas-500 animate-gradient-xy flex flex-wrap snap-center">
            <div className="grow flex items-center justify-center w-[80vw] flex-wrap">
                <div className="rounded-md bg-atlas-100 flex flex-col font-extrabold text-6xl w-[50vw] text-left m-2 h-[73vh] overflow-scroll">
                  <CountryList countries={countries} />
                </div>
                <div className="w-[29vw] m-2 h-[73vh] flex flex-col items-center justify-center">
                    <div className="w-[29vw] text-center flex flex-col items-center justify-center">
                        <div className="rounded-md w-[29vw] h-[35vw] bg-cover bg-[url('https://i.pinimg.com/736x/73/01/8b/73018baf7cd5c62334801095c05e06b6.jpg')]"></div>
                        <div className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-atlas-300 to-atlas-100 text-center">
                            Welcome to ATLAS.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  )
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