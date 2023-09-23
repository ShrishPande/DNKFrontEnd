import React from "react";
import "./AnalyticDash.css";
import CardAnalytic from "../CardAnalytic/CardAnalytic";
import CardAnalytic2 from "../CardAnalytic/CardAnalytic2";
import CardAnalytic3 from "../CardAnalytic/CardAnalytic3";

const AnalyticDash = () => {
    return (
            <div className="AnalyticDash">
                <h1>Statictics</h1>
                <div>
                    <CardAnalytic />
                </div>
                <div>
                    <CardAnalytic2 />
                </div>
                <div>
                    <CardAnalytic3 />
                </div>
            </div>
    );
};

export default AnalyticDash;
