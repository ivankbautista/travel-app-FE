import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'
import Router from 'next/router';
import { useContext } from "react"; // import Context hook
import HeaderContext from "../contexts/HeaderContext"; // import the context you want to draw the variable from

const Navbar = () => {
  const {
    loggedIn,
    loggedInUser,
    setLoggedIn,
    setLoggedInUser,
  } = useContext(HeaderContext) // destructing to get menuItems from HeaderContext

  // authentication of pages (logic) - redirect to sign_in page if not signed in + not on login or sign-up pages
  if (
    (Router.pathname !== "/users/sign_in" && Router.pathname !== "/users/sign_up") &&
    loggedIn === false
    ) {
      // console.log(1)
      Router.push("/users/sign_in")
  }

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
        <Link href='/rolls/new'>
          <a className='flex justify-center items-center h-full px-6 text-atlas-100 hover:bg-atlas-500'>
            New Roll
          </a>
        </Link>
        { loggedInUser ?
          <>
            <Link href={"/users/"+loggedInUser.username}>
              <a className='flex justify-center items-center h-full px-6 text-atlas-100 hover:bg-atlas-500'>
                My Profile
              </a>
            </Link>
            <Link href='#'>
              <a onClick={() => {setLoggedIn(false); setLoggedInUser(null); Router.push('/users/sign_in');}} className='flex justify-center items-center h-full px-6 text-atlas-100 hover:bg-atlas-500'>
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
      <div>
        { loggedInUser && <p className="text-white">{loggedInUser.first_name}{' '}{loggedInUser.last_name}</p>}
      </div>
    </div>
  )
}

export default Navbar
