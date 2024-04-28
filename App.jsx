// export default function App() {
//     return (
//       <h1 className="text-3xl font-bold underline">
//         Hello world!
//       </h1>
//     )
//   }


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/home'
import LandingPage from './Pages/LandingPage'
import {Route, Routes} from 'react-router-dom'
import IndukAyam from "./Pages/Induk-ayam";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/IndukAyam" element={<IndukAyam/>}/>
    </Routes>
    </>
  )
}

export default App
