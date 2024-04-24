import { useContext } from 'react';
import AppContext from '../context/AppContext';
const Banner = () => {
  const { bannerList } = useContext(AppContext);

  return (
    <div className='header'>
      <h1>TOP AUTHORS</h1>
      <div className='container'>
        <div className='section' style={{ backgroundImage: `url(${bannerList[0].person.photoUrl})` }}>
          <div className='content'>
            <h1>{bannerList[0].person.name}</h1>
          </div>
          <div className='overlay'></div>
        </div>
        <div className='section' style={{ backgroundImage: `url(${bannerList[1].person.photoUrl})` }}>
          <div className='content'>
          <h1>{bannerList[1].person.name}</h1>
          </div>
          <div className='overlay'></div>
        </div>
        <div className='section' style={{ backgroundImage: `url(${bannerList[2].person.photoUrl})` }}>
          <div className='content'>
          <h1>{bannerList[2].person.name}</h1>
          </div>
          <div className='overlay'></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
