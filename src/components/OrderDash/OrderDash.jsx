import React from "react";
import "./OrderDash.css";
// import Table from '../Table/Table'
import OrderDashTable from "../OrderDashTable/OrderDashTable";
// import OrderDashTableHead from "../OrderDashTableHead/OrderDashTableHead";

const OrderDash = () => {
    return (
        <div className="OrderDash">
            <h1>Requested orders</h1>
            <div>
                {/* <OrderDashTableHead /> */}
                <OrderDashTable />
            </div>

        </div>
    );
};

export default OrderDash;
