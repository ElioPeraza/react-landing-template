import React from 'react';
import './App.css';
import MyNavbar from './Navbar';
import CardBig from './Card';
import CardSmall from './CardLittle';
import { Container, Row, Col } from 'react-bootstrap';
import Myfooter from './footer';



const App = () => {
  return (
    <div>
      <nav>
        <MyNavbar />
      </nav>

      <div>
        <section>
          <CardBig />
        </section>

        <Container fluid >
        <section className='rounded m-5'>
          <Row className="g-4">
          <Col xs={12} sm={6} md={1} lg={3}>
          <CardSmall />
          </Col>
          <Col xs={12} sm={6} md={1} lg={3}>
          <CardSmall />
          </Col>
          <Col xs={12} sm={6} md={1} lg={3}>
          <CardSmall />
          </Col>
          <Col xs={12} sm={6} md={1} lg={3}>
          <CardSmall />
          </Col>
          </Row>
        </section>
        </Container>
        <div style={{ textAlign: 'center',  }}>
          <Myfooter/>
        </div>
      </div>
    </div>

  )
};

export default App;