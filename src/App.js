import React from 'react';
import './App.css';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Home />
        <Contact />
        <Navbar />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;