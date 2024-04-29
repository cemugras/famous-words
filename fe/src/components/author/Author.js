import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import SocialShare from '../../components/home/sections/social-share/SocialShare';
import LikeButton from '../../components/home/sections/like-button/LikeButton';
const Author = () => {
  const { allDataList } = useContext(AppContext);

  return (
    <div className='page-container'>
      <div className='author-header'>
        <h1>Mustafa Kemal Atatürk</h1>
        <div className='author-info'>
          <img src='https://agm.org.tr/wp-content/uploads/2021/12/1-2-696x696.jpg' alt='' />
          <div className='info-text'>
            <p>
              Mustafa Kemal Atatürk (1881-1938) was the founder of modern Turkey and played a key role in establishing
              the Republic of Turkey in 1923. He led the Turkish War of Independence after the collapse of the Ottoman
              Empire following World War I, successfully securing Turkey's independence. As the first president of
              Turkey, Atatürk initiated a series of sweeping reforms to modernize and secularize the country. These
              reforms included adopting a new legal system, transitioning to the Latin alphabet, reforming education,
              and advancing women's rights. He also emphasized secularism, separating religion from state affairs.
              Atatürk is highly revered in Turkey, often referred to as the "Father of the Turks." His leadership and
              vision were instrumental in transforming Turkey into a modern nation-state. Every year, on November 10th,
              the anniversary of his death, Turkey observes a day of remembrance to honor his legacy. Atatürk's
              influence continues to shape Turkey's identity and political landscape to this day.
            </p>
          </div>
        </div>
      </div>
      <div className='author-quotes'>
        <div className='quotes-header'>
          <h1>Quotes</h1>
        </div>
        <div className='quote-card'>
          <div class='animated-border-quote'>
            <blockquote>
              <p>The world always seems brighter when you’ve just made something that wasn’t there before.</p>
              <cite>Neil Gaiman</cite>
              <div className='social'>
                <SocialShare />
                <LikeButton />
              </div>
            </blockquote>
          </div>
          <div class='animated-border-quote'>
            <blockquote>
              <p>The world always seems brighter when you’ve just made something that wasn’t there before.</p>
              <cite>Neil Gaiman</cite>
            </blockquote>
          </div>
          <div class='animated-border-quote'>
            <blockquote>
              <p>The world always seems brighter when you’ve just made something that wasn’t there before.</p>
              <cite>Neil Gaiman</cite>
            </blockquote>
          </div>
          <div class='animated-border-quote'>
            <blockquote>
              <p>The world always seems brighter when you’ve just made something that wasn’t there before.</p>
              <cite>Neil Gaiman</cite>
            </blockquote>
          </div>
          <div class='animated-border-quote'>
            <blockquote>
              <p>The world always seems brighter when you’ve just made something that wasn’t there before.</p>
              <cite>Neil Gaiman</cite>
            </blockquote>
          </div>
          <div class='animated-border-quote'>
            <blockquote>
              <p>The world always seems brighter when you’ve just made something that wasn’t there before.</p>
              <cite>Neil Gaiman</cite>
            </blockquote>
          </div>
          <div class='animated-border-quote'>
            <blockquote>
              <p>The world always seems brighter when you’ve just made something that wasn’t there before.</p>
              <cite>Neil Gaiman</cite>
            </blockquote>
          </div>
          <div class='animated-border-quote'>
            <blockquote>
              <p>The world always seems brighter when you’ve just made something that wasn’t there before.</p>
              <cite>Neil Gaiman</cite>
            </blockquote>
          </div>
          <div class='animated-border-quote'>
            <blockquote>
              <p>The world always seems brighter when you’ve just made something that wasn’t there before.</p>
              <cite>Neil Gaiman</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
