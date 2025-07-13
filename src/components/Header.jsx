import Hamburger from 'hamburger-react'
import { useState } from 'react';
import { useEffect } from 'react';
function Header() {
    const [dropDownOpen, setDropDownOpen] = useState(false)
    useEffect(()=>{
        console.log("Dropdown state changed:", dropDownOpen);
    }, [dropDownOpen]); // This effect runs when dropDownOpen changes, you can add logic here if needed
    return (
        <div id="header" className="">
            <div>Item 1</div>
            <div>Item 2</div>
            <Hamburger toggled={dropDownOpen} toggle={setDropDownOpen} />
            
        </div>
      );
}

export default Header;