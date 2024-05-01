import React, { useContext } from 'react';
import AppContext from '../context/AppContext'; // AppContext'ten veri alıyoruz

const Topics = () => {
  const { allCategories } = useContext(AppContext); // Bağlamdan allCategories al

  const categories = allCategories?.categories || []; // Tanımsız veya boşsa varsayılanı ayarla

  const topicsWithDividers = [];
  let lastChar = '-';

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); // İlk harfi büyük yapma fonksiyonu

  categories.forEach((category, index) => {
    const curChar = category.charAt(0).toLowerCase();
    const isNewSection = index === 0 || curChar !== lastChar;

    if (isNewSection) {
      topicsWithDividers.push(
        <React.Fragment key={curChar}>
          <li className='divider' id={curChar}>
            {curChar.toUpperCase()}
          </li>
        </React.Fragment>
      );
      lastChar = curChar;
    }

    topicsWithDividers.push(
      <li key={category}>
        <a href={`#${curChar}`}>{capitalize(category)}</a> {/* Başlığı büyük harf yap */}
      </li>
    );
  });

  return (
    <div>
      <div id='scrolling'>
        <ul className='list'>{topicsWithDividers}</ul> {/* Listelenen öğeler */}
      </div>
    </div>
  );
};

export default Topics;
