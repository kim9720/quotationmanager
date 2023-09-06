import React from 'react';
import './App.css';
import CreatingList from './components/CreatingList';
import Footer from './components/Footer';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Route
import Documentation from './components/Documentation';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/documentation' element={<Documentation />} />
        <Route path='/' element={<CreatingList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
