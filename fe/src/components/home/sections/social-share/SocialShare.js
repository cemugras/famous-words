import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const SocialShare = ({ quote, authorName }) => {
  const currentUrl = window.location.href; // URL of current page
  const shareText = `${quote} - ${authorName}\n`; // Text to share
  

  return (
    <div className='social-share'>
      <FacebookShareButton url={currentUrl} quote={shareText}>
        <FacebookIcon size={24} round />
      </FacebookShareButton>

      <TwitterShareButton url={currentUrl} title={shareText}>
        <TwitterIcon size={24} round />
      </TwitterShareButton>

      <WhatsappShareButton url={currentUrl} title={shareText}>
        <WhatsappIcon size={24} round />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;
