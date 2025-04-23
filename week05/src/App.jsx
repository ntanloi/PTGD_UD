import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chefify from './components/Chefify'
import { Recipe } from './components/Recipe'
import ReactMemo from './components/ReactMemo'
import { UseReducer } from './components/useReducer'


function App() {

  return (
    <div className='flex flex-col'>
      <UseReducer/>
    </div>
  )
}

export default App
