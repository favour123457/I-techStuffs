import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <div className='flex justify-center content-center mt-11 mb-10'> 
      <div className='flex justify-between gap-9 w-[1240]'>
      <div className='justify-items-start w-[413]'> <div className='mb-3'><Image src='/Vector.jpg' width={143} height={40} alt='logo'/> </div>
      <div>Adashe is a platform designed to revolutionize the management and automation of cooperative society operations</div>
      </div>
      <div className='flex justify-between gap-15'> <div> <p className='text-xl font-bold mb-4'>Home</p>
      <p className='mb-4'>About us</p>
      <p className='mb-4'> Why choose Adashe</p>
      <p className='mb-4'>Terms and policies</p>
      </div>
      <div> <p className='text-xl font-bold mb-4'> Solutions</p>
      <p className='mb-4'> Cooperative management</p>
      <p className='mb-4'> Loan recovery system</p>
      </div> 
      <div> <p className='text-xl font-bold mb-4'>  Contact us</p>
      <p className='text-blue-500'>itechplatform.net@gmail.com</p></div>
      </div>
      
      </div>
     </div>
     <div className='flex justify-center bg-[#032E3A] content-center text-white p-4 '><div> Powered by I-Tech Platform Limited - 2025</div></div>
    </div>
  )
}

export default Footer
