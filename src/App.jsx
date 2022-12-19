import './App.css'
import { useState } from 'react'
import Home from './Home/Home'
import Header from './Header/Header'
import Eduication from './other/Eduication'
import Gift from './other/Gift'
import Parent from './other/Parent'
import Play from './other/Play'
import Why from './other/Why'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  const [state, setState] = useState(false)

  return (
    <>
      <Router>
        <Header setState={setState} state={state} />
        <Routes>
          <Route path="/" element={<Home state={state} setState={setState} />} />
          <Route path="/Eduication" element={<Eduication />} />
          <Route path="/Gift" element={<Gift />} />
          <Route path="/Parent" element={<Parent />} />
          <Route path="/Play" element={<Play />} />
          <Route path="/Why" element={<Why />} />
        </Routes>
      </Router>
    </>
  );
}
export default App
