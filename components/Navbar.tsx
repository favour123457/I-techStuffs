import React from 'react'
import Image from 'next/image'
import '../app/globals.css'

const Navbar = () => {
  return (
    
    <div className=" py-4 px-14 border-b-1 border-b-[#065C74]">
    <div className='flex justify-between items-center'>
        <div><Image src="/Vector.jpg" width={143} height={40} alt='logo'/> </div>
      
      <div className='flex'> 
        <ul className='flex'>
        <li className='px-6'>home</li>
        <li className='px-6'>solutions</li>
        <li className='px-6'>About us</li>
        <li className='px-6'>Contact us</li>

        </ul></div>
        <div> 
          <button className="btn bords px-7 py-2 m-2 rounded-xl"> sign in</button>
          <button className="btn btn-active px-7 py-2 rm-2 rounded-xl"> Register</button>
        </div>
    </div>
    </div>
    
 
  )
}

export default Navbar
