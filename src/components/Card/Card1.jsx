import React from "react";
import "./Card.css";
import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
    return <CompactCard param={props} />;
};

// Compact Card
function CompactCard({ param }) {
    const Png = param.png;
    return (
        <motion.div
            className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}`}
                />
                <span style={{fontSize: "12px", fontWeight: "400"}}>{param.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>₹{param.value}</span>
                <span>History</span>
            </div>
        </motion.div>
    );
}

export default Card;
