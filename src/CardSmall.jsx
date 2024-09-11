import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardSmall(props) {
  return (
    <Card style= {{
        width: '25rem',
        margin: '0',    
        padding: '0',   
        border: 'rounded'  
      }}>
      <Card.Img variant="top" src={props.img} class="card-img-fluid" alt="" />
      <Card.Body style={{ padding: '50' }}>
        <Card.Title style={{textAlign: 'center' }}>{props.title}</Card.Title>
        <Card.Text style={{textAlign: 'center',width: "300px", height: "150px" }}>{props.texto}</Card.Text>
        
      </Card.Body>
      <Card.Footer style={{ textAlign: 'center', backgroundColor: '#f8f9fa', }}>
      <Button variant="primary"  >Find Out More!</Button>
      </Card.Footer>
    </Card>
  );
}

export default CardSmall;
