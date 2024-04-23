import { useState } from 'react';

const Navbar = () => {
  return (
    <div class='wrapper'>
      <div class='top_navbar'>
        <div class='hamburger'>
          <div class='one'></div>
          <div class='two'></div>
          <div class='three'></div>
        </div>
        <div class='top_menu'>
          <div class='logo'>logo</div>
          <div class='search-box'>
            <button class='btn-search'>
              <i class='fas fa-search'></i>
            </button>
            <input type='text' class='input-search' placeholder='Type to Search...' />
          </div>
          <ul>
            <li>
              <a href='#'>
                <i class='fas fa-bell'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i class='fas fa-user'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class='sidebar'>
        <ul>
          <li>
            <a href='#'>
              <span class='icon'>
                <i class='fa-solid fa-house'></i>
              </span>
              <span class='title'>Home</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class='icon'>
                <i class='fa-solid fa-feather-pointed'></i>
              </span>
              <span class='title'>Authors</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class='icon'>
                <i class='fa-solid fa-layer-group'></i>
              </span>
              <span class='title'>Topics</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
