import logo from '../../../public/logo.png'
import Image from 'next/image'

function CountryEntry({ countryEntry }) {
    return (
        <div>
            <div className="mt-6">
                <div className="flex justify-between items-center py-3 px-3 bg-atlas-600">

                    <div className="text-white font-bold text-2xl items-center w-10 h-10 border rounded-full">{countryEntry.rating}</div>
                    <div className="w-full pl-4 py-2">
                        <p className="text-white font-bold">{countryEntry.location}</p>
                        <p className="text-white">{countryEntry.date}</p>
                    </div>
                    <Image src={logo} height={'40'} width={'40'} layout="fixed" className='bg-red-400 rounded-full' />

                </div>

                <div className="bg-white h-full p-3 ">
                    <p className="">{countryEntry.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CountryEntry