import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./DetailsForm.css";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    //   border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="container">
                    <Typography
                        id="modal-modal-title"
                        variant="h50"
                        component="h50"
                    >
                        <div className="head">
                            <div class="col">
                                <h3 style={{textAlign: 'center'}}>Reciever's Details</h3>
                                <form>
                                    <div class="mb-1">
                                        <label
                                            for="exampleInputEmail1"
                                            class=""
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="name"
                                            class="form-control"
                                            id="exampleInputName1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div class="mb-1">
                                        <label
                                            for="exampleInputPassword1"
                                            class=""
                                        >
                                            Company/House Name
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleInputText1"
                                        />
                                    </div>
                                    <div class="mb-1">
                                        <label
                                            for="exampleInputPassword1"
                                            class=""
                                        >
                                            Address Line 1
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleInputNumber1"
                                        />
                                    </div>
                                    <div class="mb-1">
                                        <label
                                            for="exampleInputPassword1"
                                            class=""
                                        >
                                            Address Line 2
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleInputNumber1"
                                        />
                                    </div>
                                    <div class="mb-1">
                                        <label
                                            for="exampleInputPassword1"
                                            class=""
                                        >
                                            Address Line 3
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleInputNumber1"
                                        />
                                    </div>
                                    <div class="mb-1">
                                        <label
                                            for="exampleInputPassword1"
                                            class=""
                                        >
                                            ZIP Code
                                        </label>
                                        <input
                                            type="number"
                                            class="form-control"
                                            id="exampleInputNumber1"
                                        />
                                    </div>
                                    <div class="mb-1">
                                        <label
                                            for="exampleFormControlTextarea1"
                                            class=""
                                        >
                                            Product Details
                                        </label>
                                        <select
                                            id="city"
                                            name="city"
                                            class="form-select"
                                        >
                                            <option value="">
                                                Select Country
                                            </option>
                                            <option value="Uttar Pradesh">
                                                India
                                            </option>
                                        </select>
                                    </div>
                                    <div class="mb-2">
                                        <label for="formFileMultiple" class="">
                                        Phone Number
                                        </label>
                                        <input
                                            type="textpassword"
                                            class="form-control"
                                            id="exampleInputText1"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div class="col">
                                <h3 style={{textAlign: 'center'}}>Sender's Details</h3>
                                <form>
                                    <div class="mb-1">
                                        <label
                                            for="exampleInputEmail1"
                                            class=""
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="name"
                                            class="form-control"
                                            id="exampleInputName1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div class="mb-1">
                                        <label
                                            for="exampleInputPassword1"
                                            class=""
                                        >
                                            Company/House Name
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleInputText1"
                                        />
                                    </div>
                                    <div class="mb-1">
                                        <label
                                            for="exampleInputPassword1"
                                            class=""
                                        >
                                            Address Line 1
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleInputNumber1"
                                        />
                                    </div>
                                    <div class="mb-1">
                                        <label
                                            for="exampleInputPassword1"
                                            class=""
                                        >
                                            Address Line 2
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleInputNumber1"
                                        />
                                    </div>
                                    <div class="mb-1">
                                        <label
                                            for="exampleInputPassword1"
                                            class=""
                                        >
                                            Address Line 3
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleInputNumber1"
                                        />
                                    </div>
                                    <div class="mb-1">
                                        <label
                                            for="exampleInputPassword1"
                                            class=""
                                        >
                                            ZIP Code
                                        </label>
                                        <input
                                            type="number"
                                            class="form-control"
                                            id="exampleInputNumber1"
                                        />
                                    </div>
                                    <div class="mb-1">
                                        <label
                                            for="exampleFormControlTextarea1"
                                            class=""
                                        >
                                            Product Details
                                        </label>
                                        <select
                                            id="city"
                                            name="city"
                                            class="form-select"
                                        >
                                            <option value="">
                                                Select Country
                                            </option>
                                            <option value="Uttar Pradesh">
                                                India
                                            </option>
                                        </select>
                                    </div>
                                    <div class="mb-2">
                                        <label for="formFileMultiple" class="">
                                        Phone Number
                                        </label>
                                        <input
                                            type="textpassword"
                                            class="form-control"
                                            id="exampleInputText1"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="submit">
                            <button type="submit" class="btn btn-danger mt-2">
                                Submit
                            </button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
