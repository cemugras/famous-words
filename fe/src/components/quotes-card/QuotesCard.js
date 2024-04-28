import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const QuotesCard = () => {
  const { allDataList } = useContext(AppContext);
  if (!allDataList) {
    return <div>Loading...</div>;
  }

  return (
    <div className='cards'>
      {allDataList.map((item, index) => (
        <div key={index}>
          <div className='card'>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ marginRight: '10px', width: '50px', height: '50px' }}>
                <img
                  src={item.person.photoUrl}
                  alt='User'
                  style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                />
              </div>

              <div>
                <h3 style={{ margin: '0', fontSize: '1.2rem' }}>{item.person.name}</h3>
                <a
                  href='https://example.com/emrebezci'
                  style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.9rem' }}
                ></a>
              </div>
            </div>
            {item.person.quotes.map((quote, index) => {
              return (
                <div key={index}>
                  <p style={{ lineHeight: '1.5', fontSize: '1rem', marginBottom: '20px' }}>
                    <i class='fa-solid fa-quote-left'></i> {quote} <i class='fa-solid fa-quote-right'></i>
                  </p>
                </div>
              );
            })}

            <div className='button' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                style={{
                  fontSize: '16px',
                  padding: '8px 16px',
                  background: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Normal Buton
              </button>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <i className='fa-solid fa-thumbs-up'></i>
                </button>
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span>tags:</span> <p style={{ textDecoration: 'underline' }}>{item.person.category}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuotesCard;
