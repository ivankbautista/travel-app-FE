import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex bg-purple-700 justify-between items-center px-10 h-14 bg-atlas-400'>
      <div>
        <a href='#' className='text-white'>
          {/* <img src='../../public/plane.png' alt='Logo' /> */}
          <img src='plane.png' alt='Logo' height='30' width='30' />
        </a>
        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
      </div>
      <div className='flex w-60 justify-between'>
        <Link href='#'>
          <a className='text-atlas-100 hover:text-atlas-700'>Explore</a>
        </Link>
        <Link href='#'>
          <a className='text-atlas-100 hover:text-atlas-700'>My Rolls</a>
        </Link>
        <Link href='#'>
          <a className='text-atlas-100 hover:text-atlas-700'>My Profile</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
