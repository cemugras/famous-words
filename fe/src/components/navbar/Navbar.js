import { useState } from 'react';

const Navbar = () => {
  return (
    <div className='wrapper'>
      <div className='top_navbar'>
        <div className='hamburger'>
          <div className='one'></div>
          <div className='two'></div>
          <div className='three'></div>
        </div>
        <div className='top_menu'>
          <div className='logo'>logo</div>
          <li>
            <div className='search-box'>
              <button className='btn-search'>
                <i className='fas fa-search'></i>
              </button>
              <input type='text' className='input-search' placeholder='Type to Search...' />
            </div>
          </li>
        </div>
      </div>
      {/* <div className='sidebar'>
        <ul>
          <li>
            <a href='#'>
              <span className='icon'>
                <i className='fa-solid fa-house'></i>
              </span>
              <span className='title'>Home</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'>
                <i className='fa-solid fa-feather-pointed'></i>
              </span>
              <span className='title'>Authors</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'>
                <i className='fa-solid fa-layer-group'></i>
              </span>
              <span className='title'>Topics</span>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
