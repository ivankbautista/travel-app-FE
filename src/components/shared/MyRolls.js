import { useEffect, useState } from 'react' 
import axios from 'axios'
import { useRouter, Router } from 'next/router'

function MyRolls() {
  return (
    <>
      <div className="h-screen ml-3 mt-4 pr-3 overflow-auto">
        <p className="text-white">My Rolls Page</p>
      </div>
    </>
  )
}

export default MyRolls