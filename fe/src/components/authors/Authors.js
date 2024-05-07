import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import AlphabetNav from './alphabet-nav/AlphabetNav';
import { Helmet } from 'react-helmet';


const Authors = () => {
  const { allDataForSearch } = useContext(AppContext);
  const [activeLetter, setActiveLetter] = useState(null);
  const navigate = useNavigate();
  const {urlEncryptor} = require('../../utils/endpointUtils');

  if (!allDataForSearch || allDataForSearch.length === 0) {
    return <AlphabetNav />;
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
    <Helmet>
      <title>Authors</title>
      <meta name='description' content='Authors page'/>
    </Helmet>
      <AlphabetNav activeLetter={activeLetter} onLetterClick={handleLetterClick} />

      {displayedContacts.length === 0 ? (
        <div>No contacts found for the selected letter.</div>
      ) : (
        <div className='ContactList'>
          {displayedContacts.map((contact, index) => (
            <section className='Contact' key={index} onClick={() => handleNavigate(contact.id, contact.person)}>
              <img className='Contact-avatar' src={contact.photoUrl} alt={`${contact.person}'s avatar`} />
              <a>
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
