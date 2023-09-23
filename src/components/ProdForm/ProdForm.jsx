import React from "react";
import "./ProdForm.css";

const ProdForm = () => {
    return (
        <form>
            <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label">
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
                <label for="exampleInputPassword1" class="form-label">
                    Product ID
                </label>
                <input
                    type="textpassword"
                    class="form-control"
                    id="exampleInputText1"
                />
            </div>
            <div class="mb-2">
                <label for="exampleInputPassword1" class="form-label">
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
                    <label for="exampleInputPassword1" class="form-label">
                        Weight
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        aria-label="First name"
                    />
                </div>
                <div class="col">
                    <label for="exampleInputPassword1" class="form-label">
                        Length
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        aria-label="Last name"
                    />
                </div>
                <div class="col">
                    <label for="exampleInputPassword1" class="form-label">
                        Breadth
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        aria-label="Last name"
                    />
                </div>
                <div class="col">
                    <label for="exampleInputPassword1" class="form-label">
                        Height
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        aria-label="Last name"
                    />
                </div>
                <div class="col">
                    <label for="exampleInputPassword1" class="form-label">
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
                <label for="exampleFormControlTextarea1" class="form-label">
                    Product Details
                </label>
                <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
            </div>
            <div class="mb-2">
                <label for="formFileMultiple" class="form-label">
                    Product Images
                </label>
                <input
                    class="form-control"
                    type="file"
                    accept="image/*"
                    id="formFileMultiple"
                    multiple
                />
            </div>

            <button type="submit" class="btn btn-danger">
                Submit
            </button>
        </form>
    );
};

export default ProdForm;
