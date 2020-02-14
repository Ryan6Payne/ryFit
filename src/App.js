import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'

function App() {

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
