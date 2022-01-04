import Image from 'next/image'
import logo from '../../public/logo.png'

const countries = [
    {c: 'Japan', rating: '4.5', imageUrl: "https://i.pinimg.com/736x/25/87/ec/2587ec34faa3b4bff7dbc7a2aa1692b1.jpg"}
  ]

export const UserProfile = () => {
    return (
        <div style={{backgroundImage: `url("https://i.pinimg.com/736x/25/87/ec/2587ec34faa3b4bff7dbc7a2aa1692b1.jpg")` }} className="h-72 flex flex-col justify-center items-center">
            <Image src={logo} height={'120'} width={'120'} className='bg-red-400 rounded-full mt-3'/>
            {/* <p className="rounded-full w-32 h-32 bg-red-400 mt-3"></p> */}
            <h1 className="text-white text-7xl">Leandre Kiu</h1>
            <div className="flex justify-between w-56 h-1/4">
                <button><a href="#" className="p-3 text-white bg-blue-500 rounded">Create Roll</a></button>
                <button><a href="#" className="p-3 text-white bg-blue-500 rounded">Edit Profile</a></button>
            </div>
        </div>
    )
}

// function App() {
//     return (
//       <div style={{ 
//         backgroundImage: `url("https://via.placeholder.com/500")` 
//       }}>
//         Hello World
//       </div>
//     );
//   }