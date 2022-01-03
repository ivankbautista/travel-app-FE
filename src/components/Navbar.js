import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 h-14 bg-atlas-400'>
      <a href='/' className='flex justify-center items-center text-white h-full'>
        <Image src={logo} height={'30'} width={'30'} w className='object-contain m-0 h-full'/>
      </a>
      {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
      <div className='flex w-60 justify-between'>
        <Link href='#'>
          <a className='text-atlas-100 hover:text-atlas-200'>Explore</a>
        </Link>
        <Link href='#'>
          <a className='text-atlas-100 hover:text-atlas-200'>My Rolls</a>
        </Link>
        <Link href='#'>
          <a className='text-atlas-100 hover:text-atlas-200'>My Profile</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
