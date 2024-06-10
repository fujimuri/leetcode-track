import { useState } from 'react'
import './App.css'
import ColumnContainer from './components/ColumnContainer'

function App() {

  return (
    <>
      <header className="masthead">
        <p className="header">
          Leetcode Tracker
        </p>
      </header>
      <ColumnContainer />
    </>
  )
}

export default App;