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
  
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  

  const handleClick = (index) => {
    if (cards[index].flipped || cards[index].matched || flipped.length === 2) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    const newFlipped = [...flipped, index];

    setCards(newCards);
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [i1, i2] = newFlipped;
      if (newCards[i1].icon === newCards[i2].icon) {
        newCards[i1].matched = true;
        newCards[i2].matched = true;
        setTimeout(() => {
          setFlipped([]);
          setCards([...newCards]);
        }, 500);
      } else {
        setTimeout(() => {
          newCards[i1].flipped = false;
          newCards[i2].flipped = false;
          setFlipped([]);
          setCards([...newCards]);
        }, 1000);
      }
    }
  };

const baseIcons = ["♠️", "♥️", "♦️", "♣️", "⭐", "🌟", "🔥", "💧", "🍀", "🎲", "🎯", "🎵", "🚀", "🌈", "🍎"];
const _cards = [];
  
shuffle(baseIcons).forEach((icon, i) => {
  _cards.push(<Card id={i*2+1} icon={icon} flipped={false} matched={false} />);
  _cards.push(<Card id={i*2+2} icon={icon} flipped={false} matched={false} onClick={handleClick}/>);
});


  const [numCards, setNumCards] = useState(GLOBAL_SETTINGS.default_total_cards);
  
 useEffect(()=>{
setCards(_cards);

 }, []);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // swap
  }
  return array;
}
 




  return (
    <>
     <Header  setNumCards = {setNumCards} settings={GLOBAL_SETTINGS} />
     
        <div className='card_container_wrapper'>
         <div className='card_container'>
            {cards.map((_, index) => (
              <Card key={index} />
            ))}
          </div>



      </div>
     
     
    </>
  )
}

export default App
