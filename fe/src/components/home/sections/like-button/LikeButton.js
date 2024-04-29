import React, { useState } from 'react';

const LikeButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='placement' onClick={handleClick}>
      <div className={`heart ${isActive ? 'is-active' : ''}`}></div>
    </div>
  );
};

export default LikeButton;
