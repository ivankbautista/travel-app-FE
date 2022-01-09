import logo from '../../../public/logo.png'
import Image from 'next/image'
import Flag from 'react-world-flags'

function Entry({ entry }) {
  return (
    <>
      <div className="mt-6">
        <div className="flex justify-between items-center py-3 px-3 bg-atlas-600">
          <Flag code={`${entry.flagIcon}`} className="w-10 h-10 rounded-full" />
          <div className="w-full pl-4 py-2">
            <p className="text-white">{entry.countryName}</p>
            <p className="text-white">{entry.date}</p>
          </div>
          <Image src={logo} height={'40'} width={'40'} layout="fixed" className='bg-red-400 rounded-full'/>
        </div>

        <div className="bg-white h-full p-3 ">
          <p className="">{entry.description}</p>
        </div>
      </div>
    </>
  )
}

export default Entry
