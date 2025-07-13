import Hamburger from 'hamburger-react'
import { useState } from 'react';
import { useEffect } from 'react';
 function generateCardsToFitViewPort(){
        
    }
function Header({cards, cols, rows}) {

   

    const [dropDownOpen, setDropDownOpen] = useState(false)
    useEffect(()=>{
        console.log("Dropdown state changed:", dropDownOpen);
    }, [dropDownOpen]); // This effect runs when dropDownOpen changes, you can add logic here if needed
    return (
        <div id="header" className="">
            <div className='scoreCount' id='player_1_score'>{rows}</div>
            <div className='scoreCount' id='player_2_score'>{cols}</div>
            <button className='new_cards' onClick={generateCardsToFitViewPort}>New Cards</button>
            <Hamburger  toggled={dropDownOpen} toggle={setDropDownOpen} />
            
        </div>
      );
}

export default Header;