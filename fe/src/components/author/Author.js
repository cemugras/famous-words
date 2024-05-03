import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import SocialShare from '../../components/home/sections/social-share/SocialShare';
import LikeButton from '../../components/home/sections/like-button/LikeButton';

const Author = () => {
  const location = useLocation();
  const id = location.state?.id;
  const { getDataById, authorData, setAuthorData } = useContext(AppContext);
  const [truncatedBiography, setTruncatedBiography] = useState('');
  const [showFullBiography, setShowFullBiography] = useState(false);

  useEffect(() => {
    setAuthorData(null);
    getDataById(id);
    // Listeye tıkladığında showFullBiography durumunu sıfırla
    setShowFullBiography(false);
  }, [id]);

  useEffect(() => {
    if (authorData && authorData.biography) {
      const maxLength = 500; // Max karakter sayısı
      const truncatedText = authorData.biography.length > maxLength
        ? authorData.biography.substring(0, maxLength) + "..."
        : authorData.biography;
      setTruncatedBiography(truncatedText);
    }
  }, [authorData]);

  const handleShowFullBiography = () => {
    setShowFullBiography(true);
  };

  if (!authorData) {
    return <div>Loading...</div>; // Veri yüklenirken mesaj
  }

  return (
    <div className='page-container'>
      <div className='author-header'>
        <h1>{authorData.personName}</h1>
        <div className='author-info'>
          <img src={authorData.photoUrl} alt={authorData.personName} />
          <div className='info-text'>
            <p>
              {showFullBiography ? authorData.biography : truncatedBiography}
              {!showFullBiography && (
                <button onClick={handleShowFullBiography}>See More</button>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className='author-quotes'>
        <div className='quotes-header'>
          <h1>Quotes</h1>
        </div>
        <div className='quote-card'>
          {authorData.quotes.map((quote, index) => (
            <div className='animated-border-quote' key={index}>
              <blockquote>
                <p>{quote}</p>
                <cite>{authorData.personName}</cite>
                <div className='social'>
                  <SocialShare quote={quote} authorName={authorData.personName} />
                  <LikeButton />
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Author;
