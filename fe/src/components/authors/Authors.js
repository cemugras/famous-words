import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

const AlphabetNav = ({ activeLetter, onLetterClick }) => {
  return (
    <nav className='AlphabetNav'>
      {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
        <a
          href='#'
          key={letter}
          onClick={(e) => {
            e.preventDefault();
            onLetterClick(letter);
          }}
          className={activeLetter === letter ? 'active' : ''}
        >
          {letter}
        </a>
      ))}
    </nav>
  );
};

const Authors = () => {
  const { allDataForSearch } = useContext(AppContext); // Context'ten veri alın
  const [activeLetter, setActiveLetter] = useState(null);

  if (!allDataForSearch || allDataForSearch.length === 0) {
    return <div>Loading...</div>; // Veri yüklenirken mesaj
  }

  const handleLetterClick = (letter) => {
    if (activeLetter === letter) {
      setActiveLetter(null);
    } else {
      setActiveLetter(letter);
    }
  };

  // `activeLetter` yoksa, tüm kişileri göster; varsa, filtrele
  const displayedContacts = !activeLetter
    ? allDataForSearch.sort((a, b) => a.person.localeCompare(b.person))
    : allDataForSearch
        .sort((a, b) => a.person.localeCompare(b.person))
        .filter((contact) => contact.person[0].toUpperCase() === activeLetter);

  return (
    <>
      <AlphabetNav activeLetter={activeLetter} onLetterClick={handleLetterClick} />

      {/* Eğer filtrelenmiş listede veri yoksa uyarı mesajı */}
      {displayedContacts.length === 0 ? (
        <div>No contacts found for the selected letter.</div>
      ) : (
        <div className='ContactList'>
          {displayedContacts.map((contact, index) => (
            <section className='Contact' key={index}>
              <img className='Contact-avatar' src={contact.photoUrl} alt={`${contact.person}'s avatar`} />
              <h5 className='Contact-name'>{contact.person}</h5>
            </section>
          ))}
        </div>
      )}
    </>
  );
};

export default Authors;
