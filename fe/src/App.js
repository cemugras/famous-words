import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Cards from './components/cards/Cards';
import './App.css'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Cards isSidebarOpen={isSidebarOpen} /> {/* `isSidebarOpen` durumu Cards'a aktarılır */}
    </div>
  );
};

export default App;
