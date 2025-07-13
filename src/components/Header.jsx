import Hamburger from 'hamburger-react'
import { useState } from 'react';
import { useEffect } from 'react';
 function generateCardsToFitViewPort(){
        
    }
function Header() {

   

    const [dropDownOpen, setDropDownOpen] = useState(false)
    useEffect(()=>{
        console.log("Dropdown state changed:", dropDownOpen);
    }, [dropDownOpen]); // This effect runs when dropDownOpen changes, you can add logic here if needed
    return (
        <div id="header" className="">
            <div className='scoreCount' id='player_1_score'>4</div>
            <div className='scoreCount' id='player_2_score'>2</div>
            <button className='new_cards' onClick={generateCardsToFitViewPort}>New Cards</button>
            <Hamburger  toggled={dropDownOpen} toggle={setDropDownOpen} />
            
        </div>
      );
}

export default Header;