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
            <h1>{item.person.id}</h1>
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default QuotesCard;
