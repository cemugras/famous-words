import { useLocation } from 'react-router-dom';
import QuotesCard from '../home/sections/quotes-card/QuotesCard';
import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { Helmet } from 'react-helmet';

const Topic = () => {
  const location = useLocation();
  const category = location.state?.category;
  const { getDataByTopic, setTopicData, topicData } = useContext(AppContext);

  useEffect(() => {
    getDataByTopic(category);
    setTopicData(null);
  }, [category]);

  if (!topicData) {
    return <div></div>;
  }


  //To make first letter capitalize for category
  function capitalizeFirstLetter(text) {
    if (typeof text !== 'string' || text.length === 0) {
      return text;
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const capitalizedCategory = capitalizeFirstLetter(category);

  return (
    <div className='cards-container flex'>
      <Helmet>
        <title>{capitalizedCategory}</title>
      </Helmet>
      <h1>{capitalizedCategory}</h1>
      <QuotesCard data={topicData} />
    </div>
  );
};

export default Topic;
