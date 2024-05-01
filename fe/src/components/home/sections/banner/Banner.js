import { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const { homePageData } = useContext(AppContext);
  const { urlEncryptor } = require('../../../../utils/endpointUtils');
  const navigate = useNavigate();

  if (!homePageData || homePageData.length === 0) {
    return <div>Loading...</div>; // Veri yüklenirken mesaj
  }

  // Function to select random items
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
            style={{ backgroundImage: `url(${item.photoUrl})` }}
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
