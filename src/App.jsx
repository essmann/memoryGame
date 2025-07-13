import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import Card from './components/Card'
import { useEffect } from 'react'
import { useRef } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const rows = 8;
  const columns = 5;
  const gameViewRef = useRef(null);

  const [columnCardCount, setColumnCardCount] = useState(0);
  const [rowCardCount, setRowCardCount] = useState(0);
 useEffect(() => {
    const handleResize = () => {
      let cardWidth = gameViewRef.current.children[0].children[0].offsetWidth;
      let cardHeight = gameViewRef.current.children[0].children[0].offsetHeight;
      let horizontalCardMargin = 10;
      console.log(`Viewport changed: ${window.innerWidth} x ${window.innerHeight}`);
      console.log(`Card size: width: ${cardWidth}px, height: ${cardHeight}px`);
      
      let cardsPerRow = window.innerWidth/(cardWidth+horizontalCardMargin*2);
      let cardsPerColumn = window.innerHeight/cardHeight;

      cardsPerRow = Math.floor(cardsPerRow);
      cardsPerColumn = Math.floor(cardsPerColumn);

      setColumnCardCount(cardsPerColumn);
      setRowCardCount(cardsPerRow);

      console.log(`Cards per row: ${cardsPerRow}, Cards per column: ${cardsPerColumn}`);
    };

    // Initial log (optional)
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  //these statistics vary on screen size etc.
 function seedCards(number){
  const cards = [];
  let i = 0;
  while(i<number){
    cards.push(<Card key={i} ref />);
    i++;
  }
  return cards;
 }

  function generateCards(rows) {
  const allRows = [];
  let cardCount = 0;

  for (let i = 0; i < rows; i++) {
    const cards = [];

    for (let j = 0; j < 5; j++) { // 5 cards per row
      cards.push(
        <div key={`card-${i}-${j}`} className="card">
          Card {cardCount + 1}
        </div>
      );
      cardCount++;
    }

    allRows.push(
      <div key={`row-${i}`} className="row">
        {cards}
      </div>
    );
  }

  return allRows;
}
  return (
    <>
     <Header cards=""/>
     <div className='gameView' ref={gameViewRef}>
        <div className='card_container'>
          {/* {generateCards(8)} */}
          {seedCards(columnCardCount*rowCardCount).map((card, index) => (
  <Card key={index} />
))}

      </div>
     </div>
     
    </>
  )
}

export default App
