import React from 'react';
import Cards from '../cards/Cards';
const Navbar = () => {
  return (
    // <div className='navbar px-10 gap-20'>
    //   <div>
    //     <figure>
    //       <img className='w-8' src={Logo} alt='logo' />
    //     </figure>
    //   </div>
    //   <div className='menu-lnk'>
    //     <ul className='menu menu-vertical lg:menu-horizontal rounded-box'>
    //       <li>
    //       <button class="btn btn-neutral">Home</button>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className='search-bar w-1/2'>
    //     <div className='form-control w-full'>
    //       <input type='text' placeholder='Search' className='input w-24 md:w-auto bg-platinium' />
    //     </div>
    //   </div>
    // </div>

    <div class='wrapper'>
      <div class='top_navbar'>
        <div class='hamburger'>
          <div class='one'></div>
          <div class='two'></div>
          <div class='three'></div>
        </div>
        <div class='top_menu'>
          <div class='logo'>logo</div>
          <ul>
            <li>
              <a href='#'>
                <i class='fas fa-search'></i>
              </a>
            </li>
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
                <i class='fas fa-book'></i>
              </span>
              <span class='title'>Books</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class='icon'>
                <i class='fas fa-file-video'></i>
              </span>
              <span class='title'>Movies</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class='icon'>
                <i class='fas fa-volleyball-ball'></i>
              </span>
              <span class='title'>Sports</span>
            </a>
          </li>
          <li>
            <a href='#' class='active'>
              <span class='icon'>
                <i class='fas fa-blog'></i>
              </span>
              <span class='title'>Blogs</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class='icon'>
                <i class='fas fa-leaf'></i>
              </span>
              <span class='title'>Nature</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="main_container">
<Cards/>
  </div>
</div>


    
  );
};

export default Navbar;
