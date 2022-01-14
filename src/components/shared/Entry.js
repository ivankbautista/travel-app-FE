import logo from '../../../public/logo.png'
import Image from 'next/image'
import Flag from 'react-world-flags'

function Entry({ entry }) {
  console.log(entry.image)

  return (
    <>
      <div key={entry.id} className="w-full">
        <main className="flex w-full py-10 flex">
          <img src={entry.image} className="h-32 b rounded-2xl w-32 object-cover"></img>

          <div className="ml-3 flex-col text-white">
            <div className="pt-1">
              <div className="flex mb-2">
                <p>📌</p>
                <span className="italic font-bold">{entry.city}</span>
              </div>
              <h2>{entry.category}</h2>
              <h2 className="font-semibold mt-1">{entry.date}</h2>
              <p className="mt-2 text-justify">{entry.description}</p>
            </div>
          </div>

          {/* <div className="w-1/3 flex-grow flex justify-end">
            <div onClick={() => editEntry(entry.id)} className="cursor-pointer h-full mr-4 text-xl text-blue-400 hover:text-blue-500">
              ✏️
            </div>

            <div onClick={() => deleteEntry(entry.id)} className="cursor-pointer h-full text-xl text-red-400 hover:text-red-500">
              🗑️
            </div>
          </div> */}
        </main>
        <div className="border-b-2 m-auto border-white w-full"></div>
      </div>
    </>
  )
}

export default Entry


{/* <div className="mt-6">
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
</div> */}