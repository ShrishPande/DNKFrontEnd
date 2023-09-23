import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
// import RightSide from '../RightSide/RightSide'
// import RightSide from '../RightSide/RightSide'

const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards/>
        <Table/>
        {/* <RightSide/> */}
    </div>
    
  )
}

export default MainDash