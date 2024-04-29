import React, { useState } from 'react';
import { AppProvider } from './components/context/AppContext';
import Navbar from './components/navbar/Navbar';
import Cards from './components/cards/Cards';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import './App.css';

const App = () => {
  return (
    <div>
      <AppProvider>
        <Navbar />
        <Header />
        <Banner />
        <Cards />
      </AppProvider>
    </div>
  );
};

export default App;
