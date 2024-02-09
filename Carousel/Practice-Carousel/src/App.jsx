import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarouselEffect from './Component/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Hello vite</h1>
        <CarouselEffect/>
    </>
  )
}

export default App
