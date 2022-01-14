import logo from '../../../public/logo.png'
import Image from 'next/image'

function ExploreEntry({ exploreEntry }) {
    return (
        <div className="mt-6">
            <div className="flex justify-between items-center py-3 px-3 bg-atlas-400">
                <div className="text-white font-bold text-2xl items-center w-10 h-10 border rounded-full">{exploreEntry.rating}</div>
                <div className="w-full pl-4 py-2">
                    <p className="text-white font-bold">{exploreEntry.username}</p>
                    <p className="text-white">{exploreEntry.date}</p>
                </div>
                <Image src={logo} height={'40'} width={'40'} layout="fixed" className='bg-red-400 rounded-full' />
            </div>

            <div className="bg-white h-full p-3 ">
                <p className="">{exploreEntry.description}</p>
            </div>
        </div>
    )
}

export default ExploreEntry