import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <h1>TOP AUTHORS</h1>
      <div class='container'>
        <div id='marketing' class='section'>
          <div class='content'>
            <h1>Julius Ceasar</h1>
          </div>
          <div class='overlay'></div>
        </div>
        <div id='technology' class='section'>
          <div class='content'>
            <h1>Elon Musk</h1>
          </div>
          <div class='overlay'></div>
        </div>
        <div id='advertising' class='section'>
          <div class='content'>
            <h1>Sun Tzu</h1>
          </div>
          <div class='overlay'></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
