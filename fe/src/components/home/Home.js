import React from 'react';
import Navbar from '../home/sections/navbar/Navbar'
import Cards from '../home/sections/cards/Cards';
import Banner from '../home/sections/banner/Banner';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Cards />
    </div>
  );
};

export default Home;
