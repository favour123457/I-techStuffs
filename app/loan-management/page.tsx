import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import '../globals.css'

const page = () => {
  return (
    <div > 
        <Navbar/>
        <div className='flex justify-center items-center p-4 '>

<div className='w-full max-w-7xl'>
        <div className='grid grid-cols-2 gap-6 place-items-start  mb-30 push'>
      <div className="  w-[650px]"><p className='text-6xl font-bold mb-8'>Smart loan management built for cooperative societies</p>
        <p className='mb-6'>Empower your members with fast, transparent, and flexible loan solutions tailored to their needs. With Adashe,
             applying for loans, tracking repayments, and staying compliant is just a few clicks away</p>

             <button className= 'btn btn-active px-13 py-2 rm-2 rounded-xl'> Get started</button>
      </div>

      <div className=""> <Image src="/test_image.jpg" width={612} height={186} alt='test'/>
      <Image src="/image3.jpg" width={612} height={186} alt='test'/>
       </div>
       

    </div>
      <div className='flex justify-start w-[500px] mt-40 mb-12'>
        <div>
       <p className='text-4xl font-bold mb-4'> 
      The future of lending within your community
      </p>
      <p>Loan cycles are at the heart of every cooperative society; 
        but without structure and visibility, there are delays. Adashe transforms that experience into one of control, 
        clarity, and collaboration.</p>
        </div>
      </div>
      <div>
          <div className='w-fit flex flex-col sm:flex-row gap-3'>
        <div className='shadow p-4'>
          <p className='font-bold'> Access to fair &fast credit</p>
          <p>Give members confidence with low-barrier loan access tied to their savings behavior.</p>
          </div>
        <div className='shadow p-4'>
          <p className='font-bold'>Behavior-based eligibility</p>
          <p>Dynamic checks powered by member savings history and contribution patterns</p>
          </div>
        <div className='shadow p-4'>
          <p className='font-bold'>Seamless repayment flows</p>
          <p> Automated deductions, alerts, and clear repayment schedules for loans.</p>
          </div>
        <div className='shadow p-4'>
          <p className='font-bold text-lg'>Full transparency for admins</p>
          <p className='text-sm'> Monitor all loans, delinquencies, risk zones, and growth metrics in one dashboard.</p>
        </div>
      </div>

      </div>
      <div className='flex justify-center mt-30 '><div className=' w-[709px] text-center'>  
        <p className='font-bold text-4xl mb-6'>Smart & configurable loan plans</p>

      <p>Running a cooperative society? Take full control of your cooperative’s 
        financial growth with flexible, intelligent, and easy-to-manage loan plans for your members.</p></div>
     </div>
     <div className='flex justify-between mt-30'>
        <div><Image src="/image6.jpg" width={600} height={430} alt='hi'/></div>
        <div className='text-sm w-[487]'>
          <div className='p-2 shadow mb-4 rounded'><p className='text-lg mb-5'>Customize loan terms</p>Define loan types, interest rates, repayment periods, and minimum/maximum disbursement amounts to suit different member segments.</div>
          <div className='p-2 shadow mb-4 rounded'> <p className='text-lg mb-5'>Tailor eligibility requirements</p>Create criteria based on member savings history, contribution patterns, or internal roles to ensure responsible lending.</div>
          <div className='p-2 shadow mb-4 rounded'> <p className='text-lg mb-5'>Assign dynamic interest rates</p>Offer different interest brackets based on member credit behavior, tenure, or cooperative loyalty.</div>
          <div className='p-2 shadow mb-4 rounded'><p className='text-lg mb-5'>Track plan performance</p>Monitor uptake, default rates, and repayment behavior by loan plan to make informed policy adjustments.</div>
        </div>
     </div>

      </div>
      </div>
      <div className='flex justify-center content-center p-15 bg-[#020204] text-white mb-16'>
      <div className=''>
      <div className='flex justify-center'>
          <div className='text-center text-white text-base w-[640] h-[146] mb-3'> <p className='text-5xl mb-3'>Designed to grow with you</p><p className=''>At Adashe, we believe cooperative societies should evolve with t
            heir people and so should the tools they use, that's why our loan management system is not just a static solution, 
            but a scalable, adaptive platform
            </p></div>

        </div>
    
        <div className='flex justify-center p-4 gap-4 text-sm'>
          <div className='px-6 py-3 bord w-[397] bg-[#1B1B1B]'><div className='mb-6'><Image src="/Icon.png" width={67} height={67} alt='hi'/></div><p className='text-xl mb-2'>Tiered loan access based on behavior</p>
          Our Tiered loan access model introduces a smart, fair, and progressive system that evaluates and rewards members based on their financial behavior
          </div>
          <div className='px-6 py-3 bord w-[397] bg-[#1B1B1B]'><div className='mb-6'><Image src="/icon2.png" width={67} height={67} alt='hi'/>
          </div><p className='text-xl mb-2'>Agent-assisted loan management </p>
          Empower your cooperative’s outreach with dedicated field agents who serve as trusted bridges between members and the cooperative's digital systems.
          </div>
          <div className='px-6 py-3  bord w-[397] bg-[#1B1B1B]'> <div className='mb-6'><Image src="/icon3.png" width={67} height={67} alt='hi'/></div> 
          <p className='text-xl mb-2'>Secure and centralized reporting</p>
          With Adashe, cooperative admins get a single source of truth for all member activities and society-level analytics.
          </div>
        </div>
      </div>
     
     </div>
     <div className='flex justify-center content-center mt-26 mb-10'>
      <div className='w-full max-w-7xl flex mb-15'>
      <div className='flex flex-wrap justify-center content-center w-[587] -mr-[80px]'><div> <p className='text-5xl font-bold mb-4'> We are building the future for cooperative societies</p> 
      <p className='mb-5'>Join us as we weave the future of cooperative societies with the power of collaboration, shared knowledge, and a relentless pursuit of innovation
      Together, let's create a future where cooperative societies flourish, empowering individuals, communities, and a more sustainable world.</p>
      <button className=' btn btn-active  px-13 py-2 rm-2 rounded-xl'> Contact us</button> </div>
      </div>
      <div> <Image src='/globe.png' width={730} height={460} alt='hi'/></div>
      </div>
     </div>
     <Footer/>
     
    
    </div>
  )
}
export default page
