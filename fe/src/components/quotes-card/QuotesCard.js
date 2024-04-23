import React from 'react';
import { Row, Col } from 'react-bootstrap';

const QuotesCard = () => {
  return (
    <Row style={{display:'flex', justifyContent:'space-between'}}>
      <Col>
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
              <h3 style={{ margin: '0', fontSize: '1.2rem' }}>Emre Bezci</h3>
              <a
                href='https://example.com/emrebezci'
                style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.9rem' }}
              >
                @emrebezci
              </a>
            </div>
          </div>
          <p style={{ lineHeight: '1.5', fontSize: '1rem', marginBottom: '20px' }}>
            “Everything we see in the world is the creative work of women.”
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
                <span role='img' aria-label='thumbs-up'>
                  👍
                </span>
              </button>
              <button style={{ fontSize: '20px', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                <span role='img' aria-label='thumbs-down'>
                  👎
                </span>
              </button>
            </div>
          </div>
        </div>
      </Col>
      <Col>
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
              <h3 style={{ margin: '0', fontSize: '1.2rem' }}>Emre Bezci</h3>
              <a
                href='https://example.com/emrebezci'
                style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.9rem' }}
              >
                @emrebezci
              </a>
            </div>
          </div>
          <p style={{ lineHeight: '1.5', fontSize: '1rem', marginBottom: '20px' }}>
            “Everything we see in the world is the creative work of women.”
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
                <span role='img' aria-label='thumbs-up'>
                  👍
                </span>
              </button>
              <button style={{ fontSize: '20px', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                <span role='img' aria-label='thumbs-down'>
                  👎
                </span>
              </button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default QuotesCard;
