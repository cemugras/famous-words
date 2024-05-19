import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import AlphabetNav from './alphabet-nav/AlphabetNav';
import { Helmet } from 'react-helmet';

const Authors = () => {
  const { allDataForSearch } = useContext(AppContext);
  const [activeLetter, setActiveLetter] = useState(null);
  const [visibleCount, setVisibleCount] = useState(30); // Başlangıçta gösterilecek yazar sayısı
  const navigate = useNavigate();
  const { urlEncryptor } = require('../../utils/endpointUtils');

  if (!allDataForSearch || allDataForSearch.length === 0) {
    return <AlphabetNav />;
  }

  const handleLetterClick = (letter) => {
    setActiveLetter(activeLetter === letter ? null : letter);
    setVisibleCount(30); // Yeni harfe tıklandığında gösterilecek yazar sayısını sıfırla
  };

  const handleNavigate = (id, person) => {
    navigate('/' + urlEncryptor(person), { state: { id: id } });
  };

  const filteredContacts = !activeLetter
    ? allDataForSearch
    : allDataForSearch.filter((contact) => contact.person[0].toUpperCase() === activeLetter);

  const displayedContacts = filteredContacts
    .sort((a, b) => a.person.localeCompare(b.person))
    .slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 30); // Daha fazla yazar göstermek için sayıyı artır
  };

  return (
    <>
      <Helmet>
        <title>Authors</title>
        <meta
          name='description'
          content='Explore profiles and insights from renowned authors. Learn about their lives, works, and the memorable quotes that made them famous.'
        />
      </Helmet>
      <AlphabetNav activeLetter={activeLetter} onLetterClick={handleLetterClick} />
      <h1 className='authors-header'>Inspirational Quote's Authors</h1>
      {displayedContacts.length === 0 ? (
        <div>No contacts found for the selected letter.</div>
      ) : (
        <div className='ContactList'>
          {displayedContacts.map((contact, index) => (
            <section className='Contact' key={index} onClick={() => handleNavigate(contact.id, contact.person)}>
              <img
                className='Contact-avatar'
                src={contact.photoUrl}
                alt={`${contact.person}'s life and quotes`}
                title={`${contact.person}'s life and quotes`}
                loading='auto'
                width='60px'
                height='60px'
              />
              <a>
                <h5 className='Contact-name'>{contact.person}</h5>
              </a>
            </section>
          ))}
        </div>
      )}
      <div className='see-more'>
      {visibleCount < filteredContacts.length && (
        <button className='btn-more' onClick={loadMore}>More</button>
      )}
      </div>
    </>
  );
};

export default Authors;
