import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'


function App() {
  const GLOBAL_SETTINGS = {
    default_total_cards: 30,
    default_max_card_slider: 60,
  }

  const [cards, setCards] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerScores, setPlayerScores] = useState({ 1: 0, 2: 0 }); // optional for scoring
  const [gameOver, setGameOver] = useState(false);

  const [flippedCards, setFlippedCards] = useState([]);
  const [numCards, setNumCards] = useState(GLOBAL_SETTINGS.default_total_cards);

  const baseIcons = ["♠️", "♥️", "♦️", "♣️", "⭐", "🌟", "🔥", "💧", "🍀", "🎲", "🎯", "🎵", "🚀", "🌈", "🍎"];

  useEffect(() => {
    const selectedIcons = baseIcons.slice(0, numCards / 2);
    const _cards = [];

    selectedIcons.forEach((icon, i) => {
      _cards.push({ id: i * 2 + 1, icon, flipped: false, matched: false });
      _cards.push({ id: i * 2 + 2, icon, flipped: false, matched: false });
    });

    shuffle(_cards);
    setCards(_cards);
  }, [numCards]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

// Helper delay function (optional)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const handleClick = async (index) => {
  // Prevent clicking flipped/matched cards or if 2 cards are already flipped
  if (cards[index].flipped || cards[index].matched || flippedCards.length === 2) return;

  // Flip the selected card
  setCards(prevCards => {
    const updatedCards = prevCards.map((card, idx) =>
      idx === index ? { ...card, flipped: true } : card
    );
    return updatedCards;
  });

  // Track flipped cards indices
  setFlippedCards(prev => [...prev, index]);

  // Wait for state to update before checking flipped cards
  // React state updates are async, so wait for the next tick
  await delay(50);

  // If two cards are flipped, check for match
  if (flippedCards.length + 1 === 2) {  // +1 because current card hasn't registered yet in flippedCards state

    // Get the two flipped card indices (including current)
    const allFlipped = [...flippedCards, index];
    const [i1, i2] = allFlipped;

    // Access current cards state safely
    const card1 = cards[i1];
    const card2 = cards[i2];

    if (card1.icon === card2.icon) {
      // It's a match!

      // Mark matched and update scores
      setCards(prevCards => prevCards.map((card, idx) =>
        idx === i1 || idx === i2 ? { ...card, matched: true } : card
      ));

      setPlayerScores(prev => ({
        ...prev,
        [currentPlayer]: prev[currentPlayer] + 1,
        
      }));
      console.log(`Player ${currentPlayer} scored! New score: ${playerScores[currentPlayer] + 1}`);
      // Clear flipped cards, keep player turn
      setFlippedCards([]);

    } else {
      // No match: wait a moment, then flip back and switch player

      await delay(1000);

      setCards(prevCards => prevCards.map((card, idx) =>
        idx === i1 || idx === i2 ? { ...card, flipped: false } : card
      ));

      setFlippedCards([]);
      setCurrentPlayer(prev => (prev === 1 ? 2 : 1));
    }
  }
};



  return (
    <>
      <Header setNumCards={setNumCards} settings={GLOBAL_SETTINGS} currentPlayer = {currentPlayer} score = {playerScores} />

      <div className='card_container_wrapper'>
        <div className='card_container'>
          {cards.map((card, index) => (
            <Card
              key={card.id}
              icon={card.icon}
              id={card.id}
              flipped={card.flipped}
              matched={card.matched}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
