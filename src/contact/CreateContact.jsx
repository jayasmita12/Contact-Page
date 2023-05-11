import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const CreateContact = () => {
    const contacts = useSelector(state=>state)
    const [firstname , setFirstname] = useState("")
    const [lastname , setLastname] = useState("")
    const [status , setstatus] = useState("true")
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    const handleChange = (e)=>{
        let name = e.target.name
        let value = e.target.value
        console.log(value)
        setstatus(value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        const checkname = contacts?.find((contact)=>contact.firstname == firstname && contact.lastname == lastname)
        if(!firstname || !lastname){
            return toast.warning("Please fill all in fields!")
        }
        if(checkname){
            return toast.error("Contact Name already exist ! ")
        }
        const data = {
            id:contacts[contacts?.length - 1].id + 1,
            firstname,
            lastname,
            status : status
        }
        console.log(data)
        dispatch({type:"ADD_CONTACT" , payload:data})
        console.log(data)
        toast.success("New Contact Saved Successfully !")
        navigate("/contact")
      
    }

  return (
    <div className='w-[95%] mx-auto  mt-20 mb-5 '>
        <form action="" onSubmit={handleSubmit} className='shadow-lg space-y-5 bg-gray-200 px-5 py-10 rounded w-full md:max-w-sm  mx-auto'>
        <h1 className='text-xl  text-cyan-500 font-bold flex self-center'> Create Contact</h1>
            <div>
                <label for="" className='text-xl font-semibold'>First Name :</label> <br />
                <input value={firstname} onChange={e=>setFirstname(e.target.value)} type="text" placeholder='Enter First Name' className='py-2 w-full px-2 rounded focus:outline-cyan-500 ' />
            </div>

            <div>
            <label for="" className='text-xl font-semibold'>Last Name :</label> <br />
            <input value={lastname} onChange={e=>setLastname(e.target.value)} type="text" placeholder='Enter Last Name' className='py-2 w-full  px-2 rounded focus:outline-cyan-500 ' />

            </div>

            <div className='flex space-x-3'>
            <p  className='text-lg font-semibold'>Status :</p> <br />
                <div className='mt-1 space-x-1'>
                    <input  type="radio" name='status' value="true" onChange={handleChange} id="active" />
                    <label>Active</label>
                </div>
                <div className='mt-1 space-x-1'>
                    <input type="radio" name='status' value="false" onChange={handleChange} id='inactive'/>
                    <label>Inactive</label>
                </div>
            </div>
         <button type='submit' className='w-full bg-gradient-to-r mt-5 from-cyan-500 to-blue-500 px-3 py-2 rounded font-semibold text-white'>Save Contact</button>

        </form>
    </div>
  )
}
