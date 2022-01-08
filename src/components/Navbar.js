import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'
import { useContext } from "react"; // import Context hook
import HeaderContext from "../contexts/HeaderContext"; // import the context you want to draw the variable from

const Navbar = () => {
  const {
    loggedIn,
    setLoggedIn,
  } = useContext(HeaderContext) // destructing to get menuItems from HeaderContext

  return (
    <div className='flex justify-between items-center px-8 h-14 bg-atlas-400'>
      {/* logo */}
      <div className='h-full'>
        <a href='/' className='flex justify-center items-center text-white h-full'>
          {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
          <Image src={logo} height={'30'} width={'30'} w className='object-contain m-0 h-full'/>
        </a>
      </div>
      {/* nav-items-left */}
      <div className='flex justify-between items-center h-full'>
        <Link href='#'>
          <a className='flex justify-center items-center h-full px-6 text-atlas-100 hover:bg-atlas-500'>
            Explore
          </a>
        </Link>
        <Link href='#'>
          <a className='flex justify-center items-center h-full px-6 text-atlas-100 hover:bg-atlas-500'>
            My Rolls
          </a>
        </Link>
        { loggedIn ?
          <>
            <Link href='#'>
              <a className='flex justify-center items-center h-full px-6 text-atlas-100 hover:bg-atlas-500'>
                My Profile
              </a>
            </Link>
            <Link href='#'>
              <a className='flex justify-center items-center h-full px-6 text-atlas-100 hover:bg-atlas-500'>
                Log Out
              </a>
            </Link>
          </>
        :
          <>
            <Link href='/users/sign_in'>
              <a className='flex justify-center items-center h-full px-6 text-atlas-100 hover:bg-atlas-500'>
                Log in
              </a>
            </Link>
            <Link href='/users/sign_up'>
              <a className='flex justify-center items-center h-full px-6 text-atlas-100 hover:bg-atlas-500'>
                Sign Up
              </a>
            </Link>
          </>
        }
      </div>
    </div>
  )
}

export default Navbar
