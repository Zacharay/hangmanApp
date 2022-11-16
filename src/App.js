import React from 'react'
import styles from "./assets/style.scss"
import Hangman from './components/Hangman'
import Word from './components/Word'

function App() {
  return (
    <div className='container'>
        <h1>You lost. Try again</h1>
        <Hangman />
        <Word />
    </div>
  )
}

export default App