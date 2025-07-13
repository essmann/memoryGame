import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  const rows = 8;
  const columns = 5;

  //these statistics vary on screen size etc.
 function seedCards(number){
  const cards = [];
  let i = 0;
  while(i<number){
    cards.push(<Card key={i} />);
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
     <div className='gameView'>
        <div className='card_container'>
          {/* {generateCards(8)} */}
          {seedCards(40).map((card, index) => (
  <Card key={index} />
))}

      </div>
     </div>
     
    </>
  )
}

export default App
