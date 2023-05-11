
import React from 'react'
import { Navbar } from './Navbar'
import { Route, Routes } from "react-router-dom";
import { Sidebar } from './Sidebar';
import { ContactPage } from '../contact/ContactPage';
import { Dashboard } from './Dashboard';
import { ToastContainer } from 'react-toastify';
import { CreateContact } from '../contact/CreateContact';
import { EditContact } from '../contact/EditContact';



export const AllRoutes = () => {
  let active = false
  return (
    <div>
      <ToastContainer/>
        <Navbar active={active}/>
        <div className="flex w-full">
          
            <div className='w-full'>
         <Routes>
          <Route path="/" element={<div> <Dashboard/> </div>}></Route>
          <Route path="/contact" element={<div> <ContactPage/> </div>}></Route>
          <Route path="/charts" element={<div> <Dashboard/> </div>}></Route>
          <Route path="/addContact" element={<div><CreateContact/></div>}></Route>
          <Route path="/editContact/:id" element={<div><EditContact/></div>}></Route>

        </Routes>
            </div>
        </div>
    </div>
  )
}
