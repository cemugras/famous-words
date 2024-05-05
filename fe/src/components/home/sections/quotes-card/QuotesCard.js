import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import SocialShare from '../social-share/SocialShare';
import LikeButton from '../like-button/LikeButton';
const QuotesCard = () => {
  const { homePageData } = useContext(AppContext);
  if (!homePageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='author-quotes'>
      <div className='quote-card'>
        {homePageData.map((item, index) => (
          <div className='animated-border-quote' key={index}>
            <blockquote>
              <div className='card-header'>
                <div style={{ marginRight: '10px', width: '50px', height: '50px' }}>
                  <img src={item.photoUrl} alt='User' style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                </div>
                <h3 style={{ margin: '0', fontSize: '1.2rem' }}>{item.personName}</h3>
                <a
                  href='https://example.com/emrebezci'
                  style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.9rem' }}
                ></a>
              </div>
              {item.quotes.length > 0 && (
                <div>
                  <p style={{ lineHeight: '1.5', fontSize: '1rem', marginBottom: '20px' }}>
                    <i className='fa-solid fa-quote-left'></i> {item.quotes[0]}{' '}
                    <i className='fa-solid fa-quote-right'></i>
                  </p>
                </div>
              )}
              <div className='social'>
                <SocialShare quote={item.quote} authorName={item.personName} />
              </div>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesCard;
