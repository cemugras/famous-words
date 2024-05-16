import React from 'react';
import Cards from '../home/sections/cards/Cards';
import Banner from '../home/sections/banner/Banner';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Quotes Cyclopedia</title>
      </Helmet>
      <Banner />
      <Cards />
    </div>
  );
};

export default Home;
