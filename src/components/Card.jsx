import "./Card.css";
import { useState } from "react";
function Card({ id, icon, flipped, matched }) {
    

    return (  
        
            <div className="card" onClick={() => console.log("Card clicked: " + id)}>
            </div>
        
    );
}

export default Card;
