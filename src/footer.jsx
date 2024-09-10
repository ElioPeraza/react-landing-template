import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Myfooter() {
    return (
      
        <Navbar className="bg-dark  navbar-dark">
          <Container className="d-flex justify-content-center">
            <Navbar.Brand href="#home">Copyright</Navbar.Brand>
          </Container>
        </Navbar>
    );
}


export default Myfooter;