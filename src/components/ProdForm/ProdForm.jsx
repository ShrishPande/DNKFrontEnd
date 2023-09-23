import React from "react";
import "./ProdForm.css";

const ProdForm = () => {
    return (
        <form>
            <div class="mb-2">
                <label for="exampleInputEmail1" class="">
                    Product Name
                </label>
                <input
                    type="name"
                    class="form-control"
                    id="exampleInputName1"
                    aria-describedby="emailHelp"
                />
            </div>
            <div class="mb-2">
                <label for="exampleInputPassword1" class="">
                    Product ID
                </label>
                <input
                    type="textpassword"
                    class="form-control"
                    id="exampleInputText1"
                />
            </div>
            <div class="mb-2">
                <label for="exampleInputPassword1" class="">
                    Price
                </label>
                <input
                    type="number"
                    class="form-control"
                    id="exampleInputNumber1"
                />
            </div>
            <div class="row mb-2">
                <div class="col">
                    <label for="exampleInputPassword1" class="">
                        Weight(in grams)
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        aria-label="First name"
                    />
                </div>
                <div class="col">
                    <label for="exampleInputPassword1" class="">
                        Length(in cm)
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        aria-label="Last name"
                    />
                </div>
                <div class="col">
                    <label for="exampleInputPassword1" class="">
                        Breadth(in cm)
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        aria-label="Last name"
                    />
                </div>
                <div class="col">
                    <label for="exampleInputPassword1" class="">
                        Height(in cm)
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        aria-label="Last name"
                    />
                </div>
                <div class="col">
                    <label for="exampleInputPassword1" class="">
                        Stock quantity
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        aria-label="Last name"
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
                    multiple
                />
                <div class="form-text" id="basic-addon4">Only .png , .jpg , .jpeg , .jfif , .pjpeg , .pjp accepted</div>
            </div>

            <button type="submit" class="btn btn-danger mt-2">
                Submit
            </button>
        </form>
    );
};

export default ProdForm;
