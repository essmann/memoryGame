import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
=======
import Card from './components/Card'
>>>>>>> fdb9d57f01147b89d1419553d34cc8f8cfb6f3d0
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
     <Header/>
=======
      <Header/>
      <div className='card_container'>
          <Card/>
          <Card/>
          <Card/>
      </div>
>>>>>>> fdb9d57f01147b89d1419553d34cc8f8cfb6f3d0
    </>
  )
}

export default App
