import React from 'react';
import SocialShare from '../social-share/SocialShare';
import LikeButton from '../like-button/LikeButton';
import Skeleton from './skeletonCard'

const QuotesCard = ({data}) => {
  if (!data) {
    // Veri yüklenirken Skeleton gösterelim
    return (
      <div className='cards'>
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <div className='card'>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ marginRight: '10px', width: '50px', height: '50px' }}>
                  <Skeleton />
                </div>
  
                <div>
                  <Skeleton />
                </div>
              </div>
              
              <Skeleton />
  
              <div className='social'>
                <Skeleton />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='cards'>
      {data.map((item, index) => (
        <div key={index}>
          <div className='card'>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ marginRight: '10px', width: '50px', height: '50px' }}>
                <img
                  src={item.photoUrl}
                  alt='User'
                  style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                />
              </div>

              <div>
                <h3 style={{ margin: '0', fontSize: '1.2rem' }}>{item.personName}</h3>
                <a
                  href='https://example.com/emrebezci'
                  style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.9rem' }}
                ></a>
              </div>
            </div>
            
            <div key={index}>
              <p style={{ lineHeight: '1.5', fontSize: '1rem', marginBottom: '20px' }}>
                <i className='fa-solid fa-quote-left'></i> {item.quotes[0]} <i className='fa-solid fa-quote-right'></i>
              </p>
            </div>
            
            <div className='social'>
              <SocialShare />
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuotesCard;
