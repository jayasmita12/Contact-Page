import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='relative z-20 bg-gray-200 min-h-screen w-full flex px-4 shadow-xl  pt-5'>
        <ul className='text-sm font-semibold space-y-5'>

            <Link to="/contact"><li className='hover:text-blue-800 mb-3 '>Contact Page</li></Link>
            <Link to="/charts"><li className='hover:text-blue-800 '>Charts And Map</li></Link>
        </ul>
    </div>
  )
}
