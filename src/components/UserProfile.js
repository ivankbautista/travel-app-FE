import Image from 'next/image'
import logo from '../../public/logo.png'

const countries = [
    {c: 'Japan', rating: '4.5', imageUrl: "https://i.pinimg.com/736x/25/87/ec/2587ec34faa3b4bff7dbc7a2aa1692b1.jpg"}
  ]

export const UserProfile = () => {
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
          <div className="flex items-center">
            <p style={{height: "68vh"}} className="w-3/12 text-white flex flex-col justify-center items-center">bio/user stats</p>

            <div style={{height: "68vh"}} className="w-9/12 bg-gray-900">
              <button className="bg-purple-400 px-8 py-3 mt-3 ml-3">My entries</button>
              <button className="bg-gray-300 px-8 py-3 mt-3">My Rolls</button>

              <div className="ml-3 mt-4 pr-3">
                <div className="flex justify-between items-center py-3 px-3 bg-atlas-600">

                  <Image src={logo} height={'40'} width={'40'} layout="fixed" className='bg-red-400 rounded-full'/>
                  <div className="w-full pl-4 py-2">
                    <p className="text-white">Kyoto, Japan</p>
                    <p className="text-white">12/17/2021</p>
                  </div>
                  <Image src={logo} height={'40'} width={'40'} layout="fixed" className='bg-red-400 rounded-full'/>

                </div>

                <div className="bg-white h-48 p-3 ">
                  <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus dolore, suscipit possimus ut est, ducimus culpa aut nostrum eligendi velit molestias accusantium, quasi similique eius sequi quidem! Rem, nisi?</p>
                </div>

              </div>
              
              <div className="ml-3 mt-4 pr-3">
                <div className="flex justify-between items-center py-3 px-3 bg-atlas-600">

                  <Image src={logo} height={'40'} width={'40'} layout="fixed" className='bg-red-400 rounded-full'/>
                  <div className="w-full pl-4 py-2">
                    <p className="text-white">Tokyo, Japan</p>
                    <p className="text-white">12/19/2021</p>
                  </div>
                  <Image src={logo} height={'40'} width={'40'} layout="fixed" className='bg-red-400 rounded-full'/>

                </div>

                <div className="bg-white h-48 p-3 ">
                  <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus dolore, suscipit possimus ut est, ducimus culpa aut nostrum eligendi velit molestias accusantium, quasi similique eius sequi quidem! Rem, nisi?</p>
                </div>

              </div>

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