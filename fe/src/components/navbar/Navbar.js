import * as React from 'react';
import Logo from '../../assets/famous-quotes-logo.png';
import SearchBox from '../search-box/SearchBox';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='navbar-logo' src={Logo} alt='famous-quotes' />
      <nav>
        <a href='#'>HOME</a>
        <a href='#'>AUTHORS</a>
        <a href='#'>TOPICS</a>
      </nav>
      <SearchBox />
    </div>
  );
};

export default Navbar;
