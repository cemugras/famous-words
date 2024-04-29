import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../../assets/famous-quotes-logo.png';
import SearchBox from '../search-box/SearchBox';

const Navbar = () => {
  const navigate = useNavigate();

  const handleAuthorsNavigate = () => {
    navigate('/authors');
  };

  const handleTopicsNavigate = () => {
    navigate('/topics');
  };

  const handleHomeNavigate = () => {
    navigate('/home');
  };

  return (
    <div className='navbar'>
      <img onClick={handleHomeNavigate} className='navbar-logo' src={Logo} alt='famous-quotes' />
      <nav>
        <a onClick={handleHomeNavigate}>HOME</a>
        <a onClick={handleAuthorsNavigate}>
          AUTHORS
        </a>
        <a onClick={handleTopicsNavigate}>
          TOPICS
        </a>
      </nav>
      <SearchBox />
    </div>
  );
};

export default Navbar;
