import Hamburger from 'hamburger-react'
import { useState } from 'react';
import { useEffect } from 'react';
import RangeSlider from 'react-range-slider-input';
import { IconBxRefresh } from './RefreshIcon';
 
function Header({setNumCards, settings, currentPlayer, score, showHint, resetGame}) {

    function test(input){
    
    var value = input.target.value;
    setNumCards(value);
}  
    useEffect(() => {
  const wrapper = document.querySelector(".card_container_wrapper");
  if (!wrapper) return;

  wrapper.classList.remove("turn-1", "turn-2");

  if (currentPlayer === 1) {
    wrapper.classList.add("turn-1");
  } else if (currentPlayer === 2) {
    wrapper.classList.add("turn-2");
  }
}, [currentPlayer]);

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
            
            <IconBxRefresh width={24} height={24} id='iconBx' onClick={resetGame} />
            <Hamburger  toggled={dropDownOpen} toggle={setDropDownOpen} />
            
        </div>
      );
}

export default Header;