import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='card_container'>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </>
  )
}

export default App
