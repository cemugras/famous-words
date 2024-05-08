import { useContext, useState, useEffect } from 'react';
import AppContext from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const { homePageData } = useContext(AppContext);
  const { urlEncryptor } = require('../../../../utils/endpointUtils');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (homePageData && homePageData.length > 0) {
      setLoading(false);
    }
  }, [homePageData]);

  if (loading) {
    return (
      <div className="banner">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Placeholder for Skeleton */}
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-gray-200 rounded-lg p-4 border border-gray-300 animate-pulse">
                <div className="h-40 bg-gray-400 rounded"></div>
                <div className="mt-2 h-4 bg-gray-400 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const getRandomItems = (array, numberOfItems) => {
    // Diziyi kopyalayın ve karıştırın
    const shuffledArray = [...array].sort(() => Math.random() - 0.5);

    return shuffledArray.slice(0, numberOfItems);
  };

  // Select random 3 items
  const randomData = getRandomItems(homePageData, 3);

  const handleNavigate = (id, item) => {
    navigate('/' + urlEncryptor(item), { state: { id: id } });
  };

  return (
    <div className='banner'>
      <div className='container'>
        {randomData.map((item, index) => (
          <div
            onClick={() => handleNavigate(item.id, item.personName)}
            key={index}
            className='section'
            style={{ backgroundImage: `url(${item.bannerUrl})` }}
          >
            <div className='content'>
              <h1>{item.personName}</h1>
            </div>
            <div className='overlay'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
