import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
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
  const { allDataForSearch } = useContext(AppContext);
  const [activeLetter, setActiveLetter] = useState(null);
  const navigate = useNavigate();
  const {urlEncryptor} = require('../../utils/endpointUtils');

  if (!allDataForSearch || allDataForSearch.length === 0) {
    return <div>Loading...</div>;
  }

  const handleLetterClick = (letter) => {
    if (activeLetter === letter) {
      setActiveLetter(null);
    } else {
      setActiveLetter(letter);
    }
  };

  const handleNavigate = (id, person) => {
    navigate('/' + urlEncryptor(person), {state: {id:id}});
  };

  const displayedContacts = !activeLetter
    ? allDataForSearch.sort((a, b) => a.person.localeCompare(b.person))
    : allDataForSearch
        .sort((a, b) => a.person.localeCompare(b.person))
        .filter((contact) => contact.person[0].toUpperCase() === activeLetter);

  return (
    <>
      <AlphabetNav activeLetter={activeLetter} onLetterClick={handleLetterClick} />

      {displayedContacts.length === 0 ? (
        <div>No contacts found for the selected letter.</div>
      ) : (
        <div className='ContactList'>
          {displayedContacts.map((contact, index) => (
            <section className='Contact' key={index}>
              <img className='Contact-avatar' src={contact.photoUrl} alt={`${contact.person}'s avatar`} />
              <a
                onClick={() => handleNavigate(contact.id, contact.person)} 
              >
                <h5 className='Contact-name'>{contact.person}</h5>
              </a>
            </section>
          ))}
        </div>
      )}
    </>
  );
};

export default Authors;
