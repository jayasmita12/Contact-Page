import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export const ContactPage = () => {
  const contacts = useSelector(state=>state)
  const [firstname , setFirstname] = useState("")
  const [lastname , setLastname] = useState("")
  const [status , setstatus] = useState(true)
  console.log(contacts)
  const dispatch =useDispatch()

  const deleteContact = (id)=>{
    dispatch({type:"DELETE_CONTACT", payload:id})
    toast.success("Delete Contact Successfully!")
  }

  return (
    <div className='my-5 space-y-5'>
       <div className='w-[95%] mx-auto flex justify-between '>
         <h1 className='text-xl text-blue-950 font-bold flex self-center'>Contact List</h1>
         <Link to="/addContact"><button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 rounded font-semibold text-white'>Create Contact</button></Link>
       </div>

      {/* contact list */}
      <div className="overflow-x-auto">
  <table className="table w-[95%] mx-auto">
    
    <thead>
      <tr>
        <th className='w-[10%]'>ID</th>
        <th className='w-[50%]'>Name</th>
        <th className='w-[50%]'>Status</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>

{contacts?.map((data,index)=>

      <tr key={index}>
        <th>{index+1}</th>
        <td className='text-cyan-500 font-bold'>{data.firstname} {data.lastname}</td>
        <td>
          {data.status=="true" ?
          <div className='flex space-x-1 '>
            <div className='w-2 h-2 flex self-center bg-green-500 rounded-full'></div>
            <p className='font-semibold'>Active</p>
          </div> : <div className='flex space-x-1 '>
            <div className='w-2 h-2 flex self-center bg-red-500 rounded-full'></div>
            <p className='font-semibold'>Inactive</p>
          </div>}
        </td>
        <td>
          <Link to={`/editContact/${data.id}`}><button className='bg-green-600 px-5 rounded text-white font-bold text-lg py-2'>Edit</button></Link>
        </td>
        <td className=''>
          <button onClick={()=>deleteContact(data.id)} className='bg-red-600 px-5 rounded text-white font-bold text-lg py-2'>Delete</button>
        </td>
      </tr>
)}
      
    </tbody>
  </table>
</div>
    </div>
  )
}
