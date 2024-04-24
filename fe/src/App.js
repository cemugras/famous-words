import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Cards from './components/cards/Cards';
import Header from './components/header/Header';
import './App.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Navbar/>
      <Header />
      <Cards />
    </div>
  );
};

export default App;
