import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  
  const navigate = useNavigate();
  // useEffect(()=>{
  //   const userData = JSON.parse(localStorage.getItem("userData"));
  //   if(userData){
  //     navigate('/app/welcome')
  //   }
  // })
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [data, setData] = useState({
    username: "",
    email: "",
    number: "",
    isSeller: false,
    password: "",
    otp: "",
  });
  const [usernameLogin, setUsernameLogin] = useState(false);
  const [disabledOTP, setDisabledOTP] = useState(true);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    if(!usernameLogin){

      setLoading(true);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
  
        const response = await axios.post(
          "http://localhost:5000/user/verifyLogin",
          data,
          config
        );
  
        console.log(response);
  
        navigate("/app/welcome");
        localStorage.setItem("userData", JSON.stringify(response));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }else {
      setLoading(true);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const response = await axios.post(
          "http://localhost:5000/user/loginPassword",
          data,
          config
        );

        console.log(response);

        localStorage.setItem("userData", JSON.stringify(response));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };

  const generateOtp = async (e) => {
    if (!usernameLogin) {
      setLoading(true);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const response = await axios.post(
          "http://localhost:5000/user/login",
          data,
          config
        );

        console.log(response);

        localStorage.setItem("userData", JSON.stringify(response));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    } 
  };

  const signUpHandler = async (e) => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/user/register",
        data,
        config
      );
      setDisabledOTP((prev) => !prev);
      console.log(response);

      navigate("/otp");
      localStorage.setItem("userData", JSON.stringify(response));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleClick = () => {
    setIsLoginPage((prev) => !prev);
    setUsernameLogin(true);
  };

  return (
    <div className="loginContainer">
      <div className="loginDetailContainer">
        {isLoginPage ? (
          <p className="loginText">Login to your Account</p>
        ) : (
          <p className="loginText">Register yourself to continue!</p>
        )}

        {isLoginPage &&
          (usernameLogin ? (
            <p>
              <span
                onClick={() => setUsernameLogin((prev) => !prev)}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Login Using Mobile
              </span>
            </p>
          ) : (
            <p>
              <span
                onClick={() => setUsernameLogin((prev) => !prev)}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Login Using Username
              </span>
            </p>
          ))}

        {usernameLogin ? (
          <TextField
            onChange={changeHandler}
            id="standard-basic"
            label="Enter User name"
            variant="outlined"
            name="username"
          />
        ) : (
          <TextField
            onChange={changeHandler}
            id="standard-basic"
            label="Enter Mobile Number"
            variant="outlined"
            name="number"
          />
        )}

        {!isLoginPage && (
          <>
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter Email Address"
              variant="outlined"
              name="email"
            />

            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter Mobile Number"
              variant="outlined"
              name="number"
            />
          </>
        )}
        {usernameLogin ? (
          <TextField
            onChange={changeHandler}
            id="standard-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
          />
        ) : (
          <TextField
            onChange={changeHandler}
            id="standard-password-input"
            label="OTP"
            type="password"
            name="otp"
            autoComplete="current-password"
          />
        )}

        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            onClick={isLoginPage ? loginHandler : signUpHandler}
            variant="outlined"
            color="success"
          >
            {isLoginPage ? "Login" : "Sign Up"}
          </Button>

          {!usernameLogin && (
            <Button
              onClick={() => {
                generateOtp();
              }}
              variant="outlined"
              color="success"
            >
              Get OTP
            </Button>
          )}
        </div>
        {isLoginPage ? (
          <p>
            Don't have an Account?{" "}
            <span
              onClick={handleClick}
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p>
            Already have an account!{" "}
            <span
              onClick={() => setIsLoginPage((prev) => !prev)}
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Log In
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
