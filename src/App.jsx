import React, { useState, useEffect } from 'react'
import './App.css'
// import { KeyStats } from './components/KeyStats/KeyStats'
// import { Peers } from './components/TopPeers/TopPeers';
import SplashScreen from './components/SplashScreen'

import SearchScreen from './components/SearchScreen'
// import { News } from './components/News/News';

// import { Summary } from './components/Summary/Summary';
import Dashboard from './components/Dashboard'
// import Fte from './components/Fte/Fte'

function App() {
  const [selectedResult, setSelectedResult] = useState('')
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    if (completed < 100) {
      const intervalId = setInterval(() => {
        setCompleted((prevState) => prevState + 1)
      }, 10)
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [completed])
  return (
    <div className='app'>
      <SplashScreen completed={completed} />

      {completed === 100 && !selectedResult && <SearchScreen setSelectedResult={setSelectedResult} />}
      {selectedResult && <Dashboard selectedResult={selectedResult} />}
      {/* <News /> */}
      {/* <Summary /> */}
      {/* <KeyStats /> */}
      {/* <Peers /> */}
      {/* <Graph StockSymbol='aapl' /> */}
      {/* <Fte /> */}
    </div>
  )
}

export default App