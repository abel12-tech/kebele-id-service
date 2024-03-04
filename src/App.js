import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";


const Nav = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Service",link:"/"},
      {name:"About",link:"/"},
      {name:"Blogs",link:"/"},
      {name:"Contact",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        Designer
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <MdMenu name={open ? 'close':'menu'}></MdMenu>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <button className='border bg-red-300 text-black px-3 ms-2 rounded'>
          Get Started
        </button>
      </ul>
      </div>
    </div>
  )
}

export default Nav