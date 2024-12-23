import React { useState } from 'react'
import Fetch from './components/fetch.jsx'
import './App.css'

function App() {
  return (
      <div>
          <header className="App-header">
              <h1>Axios</h1>
          </header>
          <main>
              <fetch />
          </main>
      </div>
  )
}

export default App
