import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import BussinessPage from './BussinessPage/BussinessPage'
import ProfilePage from './ProfilePage/ProfilePage'
import Kyc from './KYC/Kyc'

const Profile = () => {
  return (
    <div  style={{
        width:'90%',
        backgroundColor:'white',
        overflowY:"auto"

    }}>
      

      <div style={{
        display:'flex',
        
        backgroundColor:'white',
        
        
      }}>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default Profile