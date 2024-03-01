
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <BrouserRouter>
          <Routes>
            <Route path="" element={<h1>Welcome to my website!</h1>}/>
            <Route path="about" element={<div><h1>About</h1><p>This is a simple React Router program.</p></div>}/>
          </Routes>
        </BrouserRouter>
    </div>
  )
}

export default App
