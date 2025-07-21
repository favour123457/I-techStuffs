'use client';

import React from "react";
import Image from "next/image"

const InvoicePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 flex justify-center">

   
      <div className="bg-white rounded-xl  w-full max-w-2xl p-8">
      <div>  

          <div className="flex justify-end">
      <button className="text-xl text-white p-3 px-5" style={{ backgroundColor: '#004e5a' }}>print</button>
      </div>
              {/* Header */}
              <div className="flex justify-between items-center border-b pb-4">

<div className="flex items-center">
<Image src="/logo-top.png" width={50} height={15}/>
<div className="text-3xl block font-bold text-blue-700"> adashe</div>
</div>
<div className="text-3xl font-bold">INVOICE</div>
</div>

      </div>


        
      <div><p className="my-6 ">Invoice to</p></div>
       
        <div className="mt-6 flex justify-between items-center">
          <div className="">
          
            <p className="text-2xl font-bold p-2">David Johnson</p>
            <p className="p-2"><strong>Phone number:</strong> (+234)813 45435 5674</p>
            <p className="p-2"><strong>Email address:</strong> davidjohnson@gmail.com</p>
          </div>
          <div>
            <p className="p-2"><strong>Member ID:</strong> MEM-20201-009</p>
            <p className="p-2"><strong>Invoice No:</strong> AD6678543H</p>
            <p className="p-2"><strong>Issue Date: </strong> March 24th, 2025</p>
          </div>
        </div>

    
        <div className="mt-6  pt-2 flex justify-between items-center">
          <div>
            <p><strong>Transaction ID:</strong> TXN-34567788654</p>
            <p><strong>Reference ID:</strong> REF-56gh6782312098766</p>
          </div>
          <div > <Image src="/paid-img.png" width={115} height={55}/> </div>
        </div>

        <div className="mt-6">
          <table className="w-full table-auto text-sm border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Field</th>
                <th className="p-2 border">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Contribution amount</td>
                <td className="p-2 border">200,000.00</td>
              </tr>
              <tr>
                <td className="p-2 border">Payment for</td>
                <td className="p-2 border">Retirement plan</td>
              </tr>
              <tr>
                <td className="p-2 border">Transaction fee</td>
                <td className="p-2 border">200</td>
              </tr>
              <tr>
                <td className="p-2 border">Outstanding balance</td>
                <td className="p-2 border">0.00</td>
              </tr>
            </tbody>
          </table>
        </div>

  
        <div className=" flex justify-end mt-6  text-lg font-bold ">
          <div className=" text-white px-4 p-4"  style={{ backgroundColor: '#004e5a' }}>
          <span className="">  Sub total: </span>  200,200.00
          </div>
          
        </div>

        {/* Terms */}
        <div className="mt-8 text-xs text-gray-600  pt-4">
          <p><strong>Terms & conditions</strong></p>
          <p>
            By making this contribution, you acknowledge that all payments are final and non-refundable.
            Late contributions may attract penalties as per cooperative policies, and consistent payments
            determine loan eligibility and borrowing limits.
          </p>
        </div>

   
        <div className="mt-6 flex justify-between items-center text-xs text-gray-600 pt-4 ">
          <p>support@Adashe.com</p>
          <p>091123456789</p>
          <p> www.adashe.com</p>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
