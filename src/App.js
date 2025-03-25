import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Убрали BrowserRouter
import Header from './components/header';
import Catalog from './components/catalog';
import Footer from './components/footer';
import Login from './components/login';
import Cart from './components/cart';
import GameDetails from './components/GameDetails';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Catalog /> } />
        <Route path="/game/:id" element={<GameDetails />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
      <Footer />
    </div>
  );
};

export default App;