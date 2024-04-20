import React from 'react';

const Slider = () => {
  return (
    <div className='carousel-container px-24 mt-4'>
      <div className='carousel w-full'>
        <div id='slide1' className='carousel-item relative w-full'>
          <img src='https://i.pinimg.com/736x/4f/40/72/4f40729c5a7bd6c9223f2145ab7b959f.jpg' className='w-full max-h-96 h-96' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <img src='https://assets.ltkcontent.com/images/183240/Neil-Armstrong-Quotes_021b9a3957.jpg' className='w-full max-h-96 h-96' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <img src='https://i.pinimg.com/564x/06/74/92/067492ace77ca85022d2afbb4693252d.jpg' className='w-full max-h-96 h-96' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' className='carousel-item relative w-full'>
          <img src='https://images.foxtv.com/static.fox5dc.com/www.fox5dc.com/content/uploads/2019/10/764/432/MuhammadAliQuote_1465008594607_1402336_ver1.0_1280_720.jpg?ve=1&tl=1' className='w-full max-h-96 h-96' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
