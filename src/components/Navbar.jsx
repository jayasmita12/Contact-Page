import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { Sidebar } from './Sidebar'

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

  return (
    <div className='w-full '>
    <div className='w-full flex justify-between py-2 px-5 bg-gradient-to-r from-cyan-500 to-blue-500 '>
      <button className=' px-2 rounded text-white' onClick={toggleDrawer}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </button>
       <h1 className='text-xl text-white font-bold'>Logo</h1>
    </div>
    
    <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
               <Sidebar/>
            </Drawer>
    </div>
  )
}
