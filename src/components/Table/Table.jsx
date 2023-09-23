import * as React from "react";
import './Table.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { makeStyles } from "@mui/material";

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status};
}

const rows = [
    createData("Apple Iphone 15", 159243, "21 September 2023", "Approved"),
    createData("Boatstone 650", 237176, "21 September 2023", "Pending"),
    createData("JBL 15W Bluetooth", 262983, "21 September 2023", "Approved"),
    createData("Motorola G73", 305351, "21 September 2023", "Delivered"),
];

const makeStyles=(status)=>{
    if(status === 'Approved'){
        return{
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }

    }
    else if(status === 'Pending'){
        return{
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else{
        return{
            background: '#59bfff',
            color: 'white',
        }
    }
}

export default function BasicTable() {
    return (
        <div className="Table">
            <h3>Recent Orders</h3>
            <TableContainer component={Paper}
            style={{boxShadow: '0px 13px 20px 0px #80808029'}}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="center">Tracking ID</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="center">{row.trackingId}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                                <TableCell align="center">
                                    <span className="status" style={makeStyles(row.status)}>{row.status}</span>

                                </TableCell>
                                <TableCell align="center" className="details">Detail</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

