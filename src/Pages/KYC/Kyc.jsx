import React, { useEffect, useState } from 'react'
import Main from '../Main/Main'
import './kyc.css'

const Kyc = () => {
  const [show,setShow]= useState(false)
  
  return (
    <div className=''>
      <Main/>
      <div className="borderr px-12 py-4 flex space-x-16">
          <div class="kyc group">
            <select className='w-[250px]' name="kyc " id="">
              <option value="">Select KYC documents</option>
              <option value="Import Export Code(IEC)">Import  Export Code</option>
              <option value="AD code">AD Code</option>
              <option value="GSTIN">GSTIN</option>
            </select>
            <div className='kycContainer'>
          <div class="group">
            <input type="text" required />
            <span class="highlight"></span>
            {/* <span class="bar"></span> */}
            <label>Document Number</label>
          </div>

          <div class="group">
            <input type="text" required />
            <span class="highlight"></span>
            {/* <span class="bar"></span> */}
            <label>Document issued by</label>
          </div>

          <div class="group"onClick ={()=>setShow((prev)=>!prev)}>
            <input type="date" required />
            <span class="highlight" ></span>
            {/* <span class="bar"></span> */}
            {show &&<label>Date of Issue</label>}
          </div>

          <div class="group"onClick ={()=>setShow((prev)=>!prev)}>
            <input type="file" required />
            <span class="highlight" ></span>
          </div>

          
        </div>
        <div></div>
          </div>

      </div>
    </div>
  )
}

export default Kyc