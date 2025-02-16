import React from "react";
import { NavLink } from "react-router-dom";

function Card({text}) {
    return (
        <NavLink to="/bmi" className={({ isActive }) => (isActive ? "active" : "")}>
            <div className="web">
                <div className="main-card">
                    <h3>{text}</h3>
                </div>
            </div>
        </NavLink>
    );
}

export default Card;