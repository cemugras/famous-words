import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import AppContext from '../context/AppContext';

const QuotesCard = () => {
  const { allDataList} = useContext(AppContext);
  if (!allDataList) {
    return <div>Loading...</div>;
  }

  return (
    <Row>
      <Col>
        {allDataList.map((item, index) => (
          <div key={index}>
            <div
              style={{
                width: '18rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ marginRight: '10px', width: '50px', height: '50px' }}>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ataturk1930s.jpg/444px-Ataturk1930s.jpg'
                    alt='User'
                    style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                  />
                </div>

                <div>
                  <h3 style={{ margin: '0', fontSize: '1.2rem' }}>{item.person.name}</h3>
                  <a
                    href='https://example.com/emrebezci'
                    style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.9rem' }}
                  >

                  </a>
                </div>
              </div>
              <p style={{ lineHeight: '1.5', fontSize: '1rem', marginBottom: '20px' }}>
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                      fontSize: '20px',
                      marginRight: '10px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <i className="fa-solid fa-thumbs-up"></i>


                  </button>
                  <button
                    style={{
                      fontSize: '20px',
                      marginRight: '10px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <i class="fa-solid fa-thumbs-down"></i>


                  </button>


                </div>
              </div>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default QuotesCard;
