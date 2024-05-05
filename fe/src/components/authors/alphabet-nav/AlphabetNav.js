import React from 'react';

const AlphabetNav = ({onLetterClick, activeLetter}) => {
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

export default AlphabetNav;
