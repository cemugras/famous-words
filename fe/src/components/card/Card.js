import React from 'react';

const Card = () => {
  return (
    <div className='card card-side bg-base-100 shadow-xl w-1/4'>
      <figure className='basis-1/2'>
        <img
          className='h-full'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mustafa_Kemal_Atat%C3%BCrk.jpg/390px-Mustafa_Kemal_Atat%C3%BCrk.jpg'
          alt='Movie'
        />
      </figure>
      <div className='card-body basis-1/2'>
        <h2 className='card-title'>Mustafa Kemal Atatürk</h2>
        <p>Peace at Home, Peace in the World!</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>See more quotes...</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
