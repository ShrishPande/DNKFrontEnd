import React from "react";
import "./BussinessPage.css";

import Main from "../Main/Main";
import { useState } from "react";
import axios from "axios";

const BussinessPage = () => {


  const userData = JSON.parse(localStorage.getItem("userData"));
  const [data,setData] = useState({
    companyName:"",
    IECcode:"",
    GSTIN:"",
    ADcode:"",
    address:"",
    LUTcode:"",
    city:"",
    pincode:"",
    country:""
  })

  const changeHandler = (e)=>{
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submitHandler =async(e)=>{
    console.log("hii")
    e.preventDefault()
    console.log("hii")

    try{
      const config = {
          headers: {
            "Content-type": "application/json",
            "Authorization":`Bearer ${userData.data.token}`
          },
        };

        const response = await axios.post(
          `http://localhost:5000/business/${userData.data.user._id}`,
          data,
          config
        );

        console.log(response)


  }catch(err){
      console.error( err);
  }
  }
  return ( 
    <div className="business">
        <Main/>
      <form className="border1 h-[620px] px-[21.3px] pb-6">
        <div className="flex justify-evenly pt-12 ">
          <fieldset className="border border-black mr-5 w-60 h-16  px-4 overflow-hidden rounded-lg ">
            {" "}
            <legend>IEC Code </legend>{" "}
            <div className="flex  items-center h-2 sapce-x-2">
              <i
                style={{ color: "purple" }}
                class="pt-3 fa-solid fa-circle-exclamation"
              ></i>{" "}
              <input type="text" name="IECcode" onChange={changeHandler} className="w-48 h-4 py-4 mt-3 border-none" />{" "}
            </div>{" "}
          </fieldset>
          <fieldset className="border border-black w-60 mr-5 h-16 px-4 overflow-hidden rounded-lg ">
            {" "}
            <legend>GSTIN </legend>{" "}
            <div className="flex  items-center h-2 sapce-x-2">
              <i
                style={{ color: "purple" }}
                class="pt-3 fa-solid fa-circle-exclamation"
              ></i>{" "}
              <input type="text" naem="GSTIN" onChange={changeHandler}  className="w-48 h-4 py-4 mt-3 border-none" />{" "}
            </div>{" "}
          </fieldset>
          <fieldset className="border border-black w-60 mr-5 h-16 px-4 overflow-hidden rounded-lg ">
            {" "}
            <legend>LUT/Bond Detail </legend>{" "}
            <div className="flex  items-center h-2 sapce-x-2">
              <i
                style={{ color: "purple" }}
                class="pt-3 fa-solid fa-circle-exclamation"
              ></i>{" "}
              <input type="text" name="LUTcode" onChange={changeHandler} className="w-48 h-4 py-4 mt-3 border-none" />{" "}
            </div>{" "}
          </fieldset>
          <fieldset className="border border-black w-60 mr-5 h-16 px-4 overflow-hidden rounded-lg ">
            {" "}
            <legend>AD Code </legend>{" "}
            <div className="flex  items-center h-2 sapce-x-2">
              <i
                style={{ color: "purple" }}
                class="pt-3 fa-solid fa-circle-exclamation"
              ></i>{" "}
              <input type="text" name="ADcode" onChange={changeHandler} className="w-48 h-4 py-4 mt-3 border-none" />{" "}
            </div>{" "}
          </fieldset>


        </div>
        <div className="internal">

        <div >
          <div class="group">
            <input type="text" name="companyName" onChange={changeHandler} required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Company Name</label>
          </div>

          <div class="group">
            <input type="text" name="address" onChange={changeHandler} required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Address</label>
          </div>
        </div>
        <div>
          <div class="group">
            <input type="text" name="city" onChange={changeHandler} required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>City</label>
          </div>

          <div class="group">
            <input type="text" name="pincode" onChange={changeHandler} required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Pincode</label>
          </div>
        </div>

        </div>
        <div class="group">
            <input type="text" name="country" onChange={changeHandler} required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Country</label>
          </div>


        
        <button type="submit" className="ml-12 px-14 py-2 text-white bg-blue-500 mt-6 rounded-lg " onSubmit={(e)=>{
           console.log("hii")
           e.preventDefault()
        }}>
          SAVE / UPDATE
        </button>
      </form>
    </div>
  );
};

export default BussinessPage;
