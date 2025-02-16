import React from "react";

function Stacks({logo, text}) {

    const stackStyle = {
        display: "flex",
        gap: "4px",
        backgroundColor: "#111111",
        borderRadius: "6px",
        fontSize: "16px",
    }
    
    return (
        <div className="stack" style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#111111", 
                                        borderRadius: "6px", fontSize: "16px", marginRight: "8px", padding: "6px 10px"}}>
            <img style={{ width: "24px", height: "24px" }} src={logo} alt="" />
            <h3 style={{ fontSize: "14px", fontWeight: "500",}} >{text}</h3>
        </div>
    );
}

export default Stacks;