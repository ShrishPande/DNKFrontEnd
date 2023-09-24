import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
const Main = () => {
  return (
    <div>
        
        <div className="flex justify-center items-center borderr px-[166.1px]">
                <Link to="../business">
                    <div className='cursor-pointer flex items-center space-x-4 w-72 flex justify-center h-16'>
                        <i class="fa-solid fa-business-time fa-lg"></i>
                        <h1 className='text-base font-semibold'>BUSINESS DETAILS</h1>
                    </div>
                </Link>
                <Link to="../ProfilePage">
                    <div className='flex items-center space-x-4 w-72 flex justify-center h-16'>
                        <i class="fa-solid fa-user fa-lg"></i>
                        <h1 className='text-base font-semibold'>BASIC PROFILE</h1>
                    </div>
                </Link>
                <Link to="../KYC">
                    <div className='flex items-center space-x-4 w-72 flex justify-center h-16'>
                        <i class="fa-solid fa-business-time fa-lg"></i>
                        <h1 className='text-base font-semibold'>KYC</h1>
                    </div>
                </Link>
            </div>
            <hr />
    </div>
  )
}

export default Main