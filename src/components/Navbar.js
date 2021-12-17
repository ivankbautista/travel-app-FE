import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex bg-purple-700 justify-between items-center px-8 h-16'>
      <div>
        <a href='#' className='text-white'>
          Logo
        </a>
      </div>
      <div className='flex w-60 justify-between text-white'>
        <Link href='#'>
          <a>Explore</a>
        </Link>
        <Link href='#'>
          <a>My Rolls</a>
        </Link>
        <Link href='#'>
          <a>My Profile</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
