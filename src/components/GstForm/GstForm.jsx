import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./GstForm.css";

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
                        <h5 style={{ textAlign: "center" }}>Piece Details</h5>
                        <div className="GstForm">
                            <div className="DetailContainer">
                                <h6 style={{ textAlign: "center" }}>
                                    Product Details
                                </h6>
                                <div class="mb-3">
                                    <input
                                        placeholder="Quantity"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Units"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="HSCODE"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Product Description"
                                        type="text"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>  
                            </div>
                            <div className="DetailContainer">
                                <h6 style={{ textAlign: "center" }}>
                                    Details of Parcels
                                </h6>
                                <div class="mb-3">
                                    <input
                                        placeholder="Invoice Number"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Invoice Date"
                                        type="date"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Gross Weight(Gms)"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Net Weight"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                            </div>
                            <div className="DetailContainer">
                                <h6 style={{ textAlign: "center" }}>
                                    Value under Section 14 Customs Act
                                </h6>
                                <div class="mb-3">
                                    <input
                                        placeholder="FOB"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Currency"
                                        type="text"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Value in Currency"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Exchange Rate"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                            </div>
                            <div className="DetailContainer">
                                <h6 style={{ textAlign: "center" }}>
                                    Customs Duties
                                </h6>
                                <div class="mb-3">
                                    <input
                                        placeholder="Export Duty Rate"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Export Duty Amount"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Cess Rate"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Cess Amount"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                            </div>
                            <div className="DetailContainer">
                                <h6 style={{ textAlign: "center" }}>
                                    Tax/Commercial Invoice
                                </h6>
                                <div class="mb-3">
                                    <input
                                        placeholder="CTH"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Invoice No."
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Invoice Date"
                                        type="date"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="SI No of item Invoice"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                            </div>
                            <div className="DetailContainer">
                                <h6 style={{ textAlign: "center" }}>
                                    GST Details
                                </h6>
                                <div class="mb-3">
                                    <input
                                        placeholder="LUT/ Bond Details"
                                        type="text"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="IGST Amount"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Compensation Rate"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Compensation Amount"
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                            </div>
                            <div className="DetailContainer">
                                <h6 style={{ textAlign: "center" }}>
                                    Ecommerce Particulars
                                </h6>
                                <div class="mb-3">
                                    <input
                                        placeholder="Ecommerce"
                                        type="text"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="URL"
                                        type="text"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="Payment txn ID"
                                        type="text"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                        placeholder="SKU No."
                                        type="number"
                                        class="form-control"
                                        id="exampleInputName1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                            </div>
                            <div className="DetailContainer">
                                <h6 style={{ textAlign: "center" }}>Review</h6>
                                <div className="txt---">Piece_count: 0/1</div>
                                <div className="txt---">Piece_Weightt: 0/200</div>
                                <div className="txt---">Piece_Amount: 0.00/2000</div>
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
