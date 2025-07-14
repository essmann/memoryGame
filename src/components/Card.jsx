import "./Card.css";
import { useState } from "react";
function Card({ id, icon, flipped, matched, onClick }) {
    
    var clickMessage = `Card clicked: ${id}, Icon: ${icon}, Flipped: ${flipped}, Matched: ${matched}`;
    return (  
        
            (<div className={`card ${flipped ? "flipped" : ""}`}  onClick={() => {
                console.log(clickMessage);
                onClick(id);
            }}>
                {flipped ? icon : ""}
            </div>)
        
    );
}

export default Card;
