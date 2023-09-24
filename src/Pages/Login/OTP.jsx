import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import '../App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OTP = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ otp:"" });
    const [loading,setLoading] = useState(false);
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };

    const signUpHandler =async(e)=>{
        setLoading(true)
        try{
            const config = {
                headers: {
                  "Content-type": "application/json",
                },
              };
    
              const response = await axios.post(
                "http://localhost:5000/user/verify",
                data,
                config
              )
    
              console.log(response)
    
              navigate('/app/welcome')
              localStorage.setItem("userData",JSON.stringify(response))
              setLoading(false)
        }catch(error){
            setLoading(false)
        }
    }
  return (
    <div className="loginContainer">
        <div className="loginDetailContainer" style={{display:'flex',flexDirection:"column", alignItems:'center', justifyContent:'center'}}>
        <p className="loginText">Enter your otp</p>
        <TextField
          onChange={changeHandler}
          id="standard-password-input"
          label="OTP"
          type="password"
          name="otp"
          autoComplete="current-password"
          
        />

        <Button
            onClick={ signUpHandler}
            variant="outlined"
            color="success"
          >
            Sign Up
          </Button>
        </div>
    </div>
  )
}

export default OTP