import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import Card from './components/Card'
import { useEffect } from 'react'
import { useRef } from 'react'
  import { useLayoutEffect } from 'react';

function App() {
  
  const GLOBAL_SETTINGS = {
    default_total_cards: 30,
    default_max_card_slider: 60,
  }
  
  const [numCards, setNumCards] = useState(GLOBAL_SETTINGS.default_total_cards);
 
 


 
  return (
    <>
     <Header  setNumCards = {setNumCards} settings={GLOBAL_SETTINGS} />
     
        <div className='card_container_wrapper'>
         <div className='card_container'>
            {Array.from({ length: numCards }).map((_, index) => (
              <Card key={index} />
            ))}
          </div>



      </div>
     
     
    </>
  )
}

export default App
