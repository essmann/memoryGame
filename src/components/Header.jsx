import Hamburger from 'hamburger-react'
import { useState } from 'react';
import { useEffect } from 'react';
import RangeSlider from 'react-range-slider-input';

 
function Header({setNumCards, settings}) {

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
            <div className='scoreCount' id='player_1_score'>{row}</div>
            <div className='scoreCount' id='player_2_score'>{col}</div>
            <div id='header_title'>Essmann's memory</div>
            <Hamburger  toggled={dropDownOpen} toggle={setDropDownOpen} />
            
        </div>
      );
}

export default Header;