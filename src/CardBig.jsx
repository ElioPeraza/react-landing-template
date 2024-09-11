import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardBig() {
  return (
    <Card className='rounded m-5'style={{ backgroundColor: '#f8f9fa' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '5rem' }}>A Warm Welcome!</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officia quaerat
          blanditiis labore aspernatur vitae esse nostrum quis exercitationem ullam, 
          accusamus asperiores numquam, maiores in atque optio architecto expedita! Dolorem!
        '</Card.Text>'
        <Button variant="primary">Call to action!</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBig;