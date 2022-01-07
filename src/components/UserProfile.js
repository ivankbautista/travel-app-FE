import Image from 'next/image'
import logo from '../../public/logo.png'
import MyEntries from './shared/MyEntries'
import MyRolls from './shared/MyRolls'
import { useState } from 'react'

export const UserProfile = () => {
  
  const [isMyEntriesPage, setIsMyEntriesPage] = useState(true);
  const [isMyRollsPage, setIsMyRollsPage] = useState(false);

  const displayPage = (page) => {
    setIsMyEntriesPage(page === "myEntries" ? true : false)
    setIsMyRollsPage(page === "myRolls" ? true : false)
  }

  return (
    <>
      {/* Profile header  */}
      <div className="h-screen">
        <div style={{backgroundImage: `url("https://i.pinimg.com/736x/25/87/ec/2587ec34faa3b4bff7dbc7a2aa1692b1.jpg")` }} className="h-72 flex flex-col justify-center items-center">
          <Image src={logo} height={'120'} width={'120'} className='bg-red-400 rounded-full mt-3'/>
          {/* <p className="rounded-full w-32 h-32 bg-red-400 mt-3"></p> */}
          <h1 className="text-white text-7xl">Leandre Kiu</h1>
          <div className="flex justify-between w-56 h-1/4">
            <button><a href="#" className="p-3 text-white bg-blue-500 rounded">Create Roll</a></button>
            <button><a href="#" className="p-3 text-white bg-blue-500 rounded">Edit Profile</a></button>
          </div>
        </div>
        
        {/* Sidebar & Main content */}
        <div className="flex items-center h-full">
          <p className="h-screen bg-gray-600 w-3/12 text-white mt-3 flex flex-col justify-center items-center justify-self-start self-start">bio/user stats</p>

          <div className="h-full flex-grow w-9/12 //bg-red-900">
            <button className={`${isMyEntriesPage ? "bg-purple-400" : "bg-gray-300"} px-8 py-3 mt-3 ml-3`} onClick={() => displayPage("myEntries")}>My Entries</button>
            <button className={`${isMyRollsPage ? "bg-purple-400" : "bg-gray-300"} px-8 py-3 mt-3`} onClick={() => displayPage("myRolls")}>My Rolls</button>


            {isMyEntriesPage && <MyEntries/>}
            {isMyRollsPage && <MyRolls/>}

          </div>

        </div>
      </div>
    </>
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