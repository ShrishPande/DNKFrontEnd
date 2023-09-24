import React from "react";
import "./ProfilePage.css";
import Main from '../Main/Main'

const ProfilePage = () => {

 

  return (
    <div className="">
      <Main/>
      <div className="borderr px-12 py-4 flex space-x-16">
        <form>
          <div class="group mt-8">
            <input type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label className="flex">
              Customer Name <sup className="text-red-500 text-lg ">*</sup>{" "}
            </label>
          </div>
          <div class="group">
            <input type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Address1</label>
          </div>

          <div class="group">
            <input type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Address2</label>
          </div>

          <div class="group">
            <input type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>City</label>
          </div>

          <div class="group">
            <input type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Pincode</label>
          </div>
        </form>

        <div>
          <div className="flex items-center mt-12 mb-4">
            <i class="fa-solid fa-lg fa-user pr-5"></i>
            <h1 className="pr-2">User Name:</h1>
            <h1 className="font-bold text-red-500">Name</h1>
          </div>
          <div className="bg-blue-100 px-8 py-4 mt-8 rounded-lg">
            <h1 className="text-base font-bold">
              Registered contact details.!
            </h1>
            <h1 className="pt-1 pl-8">Phone Number</h1>
            <div className="flex items-center gap-x-8">
              <i class="fa-solid fa-tablet fa-lg mt-4"></i>
              <input
                className="bg-blue-100 w-96"
                type="text"
                placeholder="8433146985"
                readOnly
                name=""
                id=""
              />
            </div>
            <div className="flex items-center space-x-8">
              <i class="fa-solid fa-at fa-lg mt-4"></i>
              <input
                className="bg-blue-100 w-96"
                type="text"
                placeholder="xyz@gmail.com"
                readOnly
                name=""
                id=""
              />
            </div>
          </div>
          <div className="bg-blue-100 px-8 py-5 mt-8 rounded-lg">
            <h1 className="text-base font-bold">
              Contact details for receiving notifications, alerts, circulars,
              etc.,
            </h1>
            <div className="flex items-center space-x-6"> 
              <i class="fa-solid fa-tablet fa-lg mt-4"></i>
              <input type="text" placeholder="Phone Number" className="w-96 bg-blue-100" id="" />
            </div>
            <div className="flex items-center space-x-6"> 
              <i class="fa-solid fa-at fa-lg mt-4"></i>
              <input type="text" placeholder="Email" className="w-96 bg-blue-100" id="" />
            </div>
          </div>
          <button className="bg-blue-500 w-full mt-8 py-2 rounded-lg text-white font-semibold tracking-wider">Save/Update</button>
        </div>

       
      </div>
    </div>
  );
};

export default ProfilePage;
