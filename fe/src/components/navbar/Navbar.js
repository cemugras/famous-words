import React from 'react';
import Logo from '../../assets/logo.png';
const Navbar = () => {
  return (
    <div className='navbar px-10 gap-20'>
      <div>
        <figure>
          <img className='w-8' src={Logo} alt='logo' />
        </figure>
      </div>
      <div className='menu-lnk'>
        <ul className='menu menu-vertical lg:menu-horizontal rounded-box'>
          <li>
          <button class="btn btn-neutral">Home</button>
          </li>
        </ul>
      </div>
      <div className='search-bar w-1/2'>
        <div className='form-control w-full'>
          <input type='text' placeholder='Search' className='input w-24 md:w-auto bg-platinium' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
