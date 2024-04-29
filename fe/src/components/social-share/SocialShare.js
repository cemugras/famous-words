import React from 'react';

const SocialShare = () => {
  return (
    <button class='btn-share'>
      <span class='btn-text'>Share</span>
      <span class='btn-icon'>
      <i className="fa-solid fa-share-nodes"></i>
      </span>
      <ul class='social-icons'>
        <li>
          <a href='https://twitter.com/alphardex007' target='_blank'>
          <i className="fa-brands fa-x-twitter"></i>
          </a>
        </li>
        <li>
          <a href='https://codepen.io/alphardex' target='_blank'>
          <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href='https://github.com/alphardex' target='_blank'>
          <i className="fa-brands fa-whatsapp"></i>
          </a>
        </li>
      </ul>
    </button>
  );
};

export default SocialShare;
