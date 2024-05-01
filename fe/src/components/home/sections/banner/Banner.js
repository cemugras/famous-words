import { useContext } from 'react';
import AppContext from '../../../context/AppContext';

// Function to select random items
const getRandomItems = (array, numberOfItems) => {
  // Diziyi kopyalayın ve karıştırın
  const shuffledArray = [...array].sort(() => Math.random() - 0.5);

  return shuffledArray.slice(0, numberOfItems);
};

const Banner = () => {
  const { homePageData } = useContext(AppContext);

  if (!homePageData || homePageData.length === 0) {
    return <div>Loading...</div>; // Veri yüklenirken mesaj
  }

  // Select random 3 items
  const randomData = getRandomItems(homePageData, 3);

  return (
    <div className='banner'>
      <div className='container'>
        {randomData.map((item, index) => (
          <div key={index} className='section' style={{ backgroundImage: `url(${item.photoUrl})` }}>
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
