import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";

import RightSide from "./components/RightSide/RightSide";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem("userData"));
    if(!userData){
      navigate('/')
    }
  },[])
  return (

      <div className="AppGlass">
        <Sidebar />
        <Outlet/>
        <RightSide />
      </div>
  );
};

export default Main;
