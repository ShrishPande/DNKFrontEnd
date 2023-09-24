import React, { useEffect, useState } from "react";
// import Logo from "../../imgs/logo.png";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import {motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem("userData"));
        if(!userData){
            navigate("/")
        }
    })

    const sidebarVariants ={
        true:{
            left: '0'
        },
        false:{
            left: '-60%'
        }
    }

    return (
        <>
            <div className="bars" style={expanded ? { left: "60%" } : { left: "5%" }}
            onClick={()=> setExpanded(!expanded)}
            >
                <UilBars />
            </div>
            <motion.div className="Sidebar"
            variants={sidebarVariants}
            animate={window.innerWidth<=768? `${expanded}`:''}
            >
                {/* Logo */}
                <div className="logo">
                    <img src={"https://dnk.cept.gov.in/customers.web/static/img/IPlogo.png"} alt="" />
                    <span>
                        <span>DNK</span>
                        <br />
                        Admin
                    </span>
                </div>
                {/* Menu */}
                <div className="menu">
                    {SidebarData.map((item, index) => {
                        return (
                            <div
                                className={
                                    selected === index
                                        ? "menuItem active"
                                        : "menuItem"
                                }
                                key={index}
                                onClick={() => {setSelected(index)
                                    navigate(item.nav)
                                }}
                            >
                                <item.icon />
                                <span>{item.heading}</span>
                            </div>
                        );
                    })}

                    <div className="menuItem" onClick={()=>localStorage.clear()}>
                        <UilSignOutAlt />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Sidebar;
