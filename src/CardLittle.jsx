import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardSmall() {
  return (
    <Card style= {{
        width: '25rem',
        margin: '0',    
        padding: '0',   
        border: 'rounded'  
      }}>
      <Card.Img  className="img-fluid" variant="top" src="http://placehold.it/500x325"  alt="foto Foto.png " />
      <Card.Body style={{ padding: '50' }}>
        <Card.Title style={{ margin: '70', textAlign: 'center' }}>Card Title</Card.Title>
        <Card.Text style={{ margin: '70', textAlign: 'center' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Officia, labore! Quasi molestias sit fugit cupiditate commodi 
          quos amet deserunt at saepe, natus rem id distinctio quia error 
          pariatur voluptatum nostrum.
        </Card.Text>
        
      </Card.Body>
      <Card.Footer style={{ textAlign: 'center', backgroundColor: '#f8f9fa', }}>
      <Button variant="primary"  >Find Out More!</Button>
      </Card.Footer>
    </Card>
  );
}

export default CardSmall;