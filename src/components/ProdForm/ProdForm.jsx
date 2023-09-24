import React, { useEffect, useState } from "react";
import "./ProdForm.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProdForm = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  useEffect(async()=>{
    try{
        const config = {
            headers: {
              "Content-type": "application/json",
              "Authorization":`Bearer ${userData.data.token}`
            },
          };

          const response = await axios.get(
            `http://localhost:5000/business/${userData.data.user._id}`,
            config
          );

          console.log(response)


    }catch(err){
        console.error( err);
    }
  })

  const [data, setData] = useState({
    BusinessId: "",
    name: "",
    price: "",
    images: imageUrls,
    weight: 0,
    length: 0,
    breadth: 0,
    height: 0,
    desc: "",
    qty: 0,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };



  const handleImageChange = (e) => {
    const files = e.target.files;
    setSelectedImages(files);

    // Upload each selected image to Cloudinary
    Array.from(files).forEach((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "eizbqajy");
      formData.append("cloud_name", "dnyyhezmx"); // Set your Cloudinary upload preset

      axios
        .post(
          "https://api.cloudinary.com/v1_1/dnyyhezmx/image/upload",
          formData
        )
        .then((response) => {
          setImageUrls((prevUrls) => [...prevUrls, response.data.secure_url]);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    });
  };


  const submitHandler=async(e)=>{
    e.preventDefault();
    try {
        const config = {
          headers: {
            "Content-type": "application/json",
            "Authorization":""
          },
        };
  
        const response = await axios.post(
          "http://localhost:5000/products/add",
          data,
          config
        );
  

        localStorage.setItem("userData", JSON.stringify(response));

      } catch (error) {

      }
  }
  return (
    <form>
      <div class="mb-2">
        <label for="exampleInputEmail1" class="">
          Product Name
        </label>
        <input
          type="name"
          name="name"
          class="form-control"
          id="exampleInputName1"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
      </div>
      {/* <div class="mb-2">
        <label for="exampleInputPassword1" class="">
          Product ID
        </label>
        <input
          type="textpassword"
          
          class="form-control"
          id="exampleInputText1"
        />
      </div> */}
      <div class="mb-2">
        <label for="exampleInputPassword1">
          Price
        </label>
        <input
          type="number"
          name="price"
          class="form-control"
          id="exampleInputNumber1"
          onChange={handleChange}

        />
      </div>
      <div class="row mb-2">
        <div class="col">
          <label for="exampleInputPassword1" class="">
            Weight(in grams)
          </label>
          <input
            type="number"
            name="weight"
            class="form-control"
            aria-label="First name"
          onChange={handleChange}

          />
        </div>
        <div class="col">
          <label for="exampleInputPassword1" class="">
            Length(in cm)
          </label>
          <input
            type="number"
            name="length"
            class="form-control"
            aria-label="Last name"
          onChange={handleChange}

          />
        </div>
        <div class="col">
          <label for="exampleInputPassword1" class="">
            Breadth(in cm)
          </label>
          <input
            type="number"
            name="breadth"
            class="form-control"
            aria-label="Last name"
          onChange={handleChange}

          />
        </div>
        <div class="col">
          <label for="exampleInputPassword1" class="">
            Height(in cm)
          </label>
          <input
            type="number"
            name="height"
            class="form-control"
            aria-label="Last name"
          onChange={handleChange}

          />
        </div>
        <div class="col">
          <label for="exampleInputPassword1" class="">
            Stock quantity
          </label>
          <input
            type="number"
            name="qty"
            class="form-control"
            aria-label="Last name"
          onChange={handleChange}

          />
        </div>
      </div>
      <div class="mb-2">
        <label for="exampleFormControlTextarea1" class="">
          Product Details
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="mb-2">
        <label for="formFileMultiple" class="">
          Product Images
        </label>
        <input
          class="form-control"
          type="file"
          accept="image/*"
          id="formFileMultiple"
          onChange={handleImageChange}
          multiple
        />
        <div class="form-text" id="basic-addon4">
          Only .png , .jpg , .jpeg , .jfif , .pjpeg , .pjp accepted
        </div>
      </div>

      <button type="submit" class="btn btn-danger mt-2" onSubmit={submitHandler}>
        Submit
      </button>
    </form>
  );
};

export default ProdForm;
