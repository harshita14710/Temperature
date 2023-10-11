import React from 'react'
import Temperature from './Temperature'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Nav from './Navigation'
import Home from './Home'
import Navigation from './Navigation'

const App = () => {
  return (
    <Router>
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Temperature/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App