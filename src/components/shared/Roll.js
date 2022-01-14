import Link from "next/link"

function Roll({ roll }) {
  console.log(roll)

  return (
    <>
    <Link href={`/rolls/${roll.id}`}>
      <a className='flex justify-center items-center w-full mt-4 bg-atlas-600 hover:bg-atlas-400'>
        <div className="py-6 px-5 w-full">
          {/* <Flag code={`${entry.flagIcon}`} className="w-10 h-10 rounded-full" /> */}
            <p className="text-white">{roll.title}</p>
            <p className="text-white">{roll.start_date} - {roll.end_date}</p>
        </div>
      </a>
    </Link>
  </>

  )
}

export default Roll

// import Link from "next/link"

// function Roll({ roll }) {
//   return (
//     <>
//     <div className="mt-6">
//       <div className="flex justify-between items-center py-3 px-3 bg-atlas-600">
//         {/* <Flag code={`${entry.flagIcon}`} className="w-10 h-10 rounded-full" /> */}
//         <div className="w-full pl-4 py-2">
//           <p className="text-white">{roll.title}</p>
//           <p className="text-white">{roll.start_date} - {roll.end_date}</p>
//           <Link href={`/rolls/${roll.id}`}>
//             <a className='flex justify-center items-center h-full px-6 text-atlas-100 hover:bg-atlas-500'>Show Roll</a>
//           </Link>
//         </div>
//         {/* <Image src={logo} height={'40'} width={'40'} layout="fixed" className='bg-red-400 rounded-full'/> */}
//       </div>
//     </div>
//   </>

//   )
// }

// export default Roll
