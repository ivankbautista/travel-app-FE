import MyEntries from './shared/MyEntries'
import MyRolls from './shared/MyRolls'
import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import HeaderContext from '../contexts/HeaderContext'
import Router from 'next/router'
import { useRouter } from 'next/router'

export const UserProfile = () => {
  const [isMyEntriesPage, setIsMyEntriesPage] = useState(true);
  const [isMyRollsPage, setIsMyRollsPage] = useState(false);
  const {loggedIn, loggedInUser, setLoggedIn, setLoggedInUser } = useContext(HeaderContext)

  const displayPage = (page) => {
    setIsMyEntriesPage(page === "myEntries" ? true : false)
    setIsMyRollsPage(page === "myRolls" ? true : false)
  }

  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const username = router.query.username

  const API = "http://localhost:3001"

  useEffect(() => {
    if(!router.isReady) return
      axios({
        method: 'GET',
        url: `${API}/users/${username}`,
      })
        .then(function (response) {
          // console.log(response.data)
          setCurrentUser(response.data)
          setLoading(false)
        })
    }, [router.isReady]);

    if (isLoading) {
      return <div className="App text-white">Loading...</div>
    }

  return (
    <>
    {loggedIn && 
          <div className="h-screen">
          <div style={{backgroundImage: `url("https://i.pinimg.com/736x/25/87/ec/2587ec34faa3b4bff7dbc7a2aa1692b1.jpg")` }} className="h-72 flex flex-col justify-center items-center">
            {/* <Image src={imageUrl} height={'120'} width={'120'} className='bg-red-400 rounded-full mt-3'/> */}
            {/* <img src={imageUrl} alt="Profile Picture" height={120} width={100} className="rounded-full mt-3" /> */}
            {/* <p className="rounded-full w-32 h-32 bg-red-400 mt-3"></p> */}
            <h1 className="text-white text-7xl">{currentUser.first_name}{' '}{currentUser.last_name}</h1>
            <p className="w-full mt-3 text-4xl text-white flex flex-col justify-center items-center justify-self-start">{currentUser.bio}</p>
            <div className="flex justify-between w-56 h-1/4">
              { 
                loggedInUser && Router.query.username === loggedInUser.username && 
                <button><a href={"/rolls/new"} className="p-3 text-white bg-atlas-400 hover:bg-atlas-500 rounded">Create Roll</a></button> }
              { 
                loggedInUser && Router.query.username === loggedInUser.username && 
                <button><a href={"/users/"+loggedInUser.id+"/edit"} className="p-3 text-white bg-atlas-400 hover:bg-atlas-500 rounded">Edit Profile</a></button>
              }
            </div>
          </div>
          
          <div className="flex justify-center h-full">

            <div className="flex flex-col h-full w-11/12 ml-5 mt-5">
              <div>
                <button className={`${isMyEntriesPage ? "bg-purple-400" : "bg-gray-300"} px-8 py-3`} onClick={() => displayPage("myEntries")}>My Entries</button>
                <button className={`${isMyRollsPage ? "bg-purple-400" : "bg-gray-300"} px-8 py-3 mt-3`} onClick={() => displayPage("myRolls")}>My Rolls</button>
              </div>

              {isMyEntriesPage && <MyEntries currentUser={currentUser}/>}
              {isMyRollsPage && <MyRolls currentUser={currentUser}/>}

            </div>

          </div>
        </div>
      }
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