import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Banner = () => {
  const { bannerList } = useContext(AppContext);

  // Eğer bannerList boş veya undefined ise bir yedek eleman veya yükleniyor mesajı gösterin
  if (!bannerList || bannerList.length < 3) {
    return <div>Loading...</div>; // Yükleme mesajı veya alternatif içerik
  }

  return (
    <div className='banner'>
      <div className='container'>
        {bannerList.map((item, index) => (
          <div
            key={index}
            className='section'
            style={{ backgroundImage: `url(${item.person.photoUrl})` }}
          >
            <div className='content'>
              <h1>{item.person.name}</h1>
            </div>
            <div className='overlay'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
