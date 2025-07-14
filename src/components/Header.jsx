import Hamburger from 'hamburger-react'
import { useState } from 'react';
import { useEffect } from 'react';
import RangeSlider from 'react-range-slider-input';

 
function Header({setNumCards, settings, currentPlayer, score}) {

    function test(input){
    
    var value = input.target.value;
    setNumCards(value);
}  
    var row = Math.floor(window.innerWidth / (50 + 10*2));
     var col = Math.floor(window.innerHeight / (75 + 10*2));

    const [dropDownOpen, setDropDownOpen] = useState(false)
    useEffect(()=>{
        console.log("Dropdown state changed:", dropDownOpen);
    }, [dropDownOpen]); // This effect runs when dropDownOpen changes, you can add logic here if needed
    return (
        <div id="header" className="">
            {currentPlayer == 2 ? <div className='scoreCount turn red' id='player_2_score'>{score[2]}</div> : <div className='scoreCount' id='player_2_score'>{score[2]}</div>}
            {currentPlayer == 1 ? <div className='scoreCount turn blue' id='player_1_score'>{score[1]}</div> : <div className='scoreCount ' id='player_1_score'>{score[1]}</div>}
            <br></br>
            <div className={`currentPlayerTitle ${currentPlayer == 2 ? "red" : "blue"}`}>{currentPlayer==2 ? "Red" : "Blue"}</div>
            <Hamburger  toggled={dropDownOpen} toggle={setDropDownOpen} />
            
        </div>
      );
}

export default Header;