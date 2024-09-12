import React from 'react';
import './App.css';
import MyNavbar from './MyNavbar';
import CardBig from './CardBig';
import CardSmall from './CardSmall';
import { Container, Row, Col } from 'react-bootstrap';
import Myfooter from './Myfooter';



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
        <section >
          <Row className="g-4 m-4">
          <Col xs={12} sm={6} md={6} lg={3} style={{ marginBottom: 20, padding: 0, display: 'flex', justifyContent: 'center' ,alignItems: 'center'}}>
          <CardSmall 
          img= "http://placehold.it/800x250" 
          title= " Titulo N°1" 
          texto=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Officia, labore! Quasi molestias sit fugit cupiditate commodi 
          quos amet deserunt at saepe," 
          />

          </Col>
          <Col xs={12} sm={6} md={6} lg={3} style={{ marginBottom: 20, padding: 0, display: 'flex', justifyContent: 'center' ,alignItems: 'center'}}>
          <CardSmall 
            img= "http://placehold.it/550x250" 
            title = " Titulo N°2" 
            texto=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, labore! "
          />

          </Col>
          <Col xs={12} sm={6} md={6} lg={3} style={{ marginBottom: 20, padding: 0, display: 'flex', justifyContent: 'center' ,alignItems: 'center'}}>
          <CardSmall 
          img= "http://placehold.it/450x250" 
          title= " Titulo N°3" 
          texto=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Officia, labore! Quasi molestias sit fugit cupiditate commodi 
          quos amet deserunt at saepe, natus rem id distinctio quia error 
          pariatur voluptatum nostrum."
          />

          </Col>
          <Col xs={12} sm={6} md={6} lg={3} style={{ marginBottom: 20, padding: 0, display: 'flex', justifyContent: 'center' ,alignItems: 'center'}}>
          <CardSmall 
          img= "http://placehold.it/350x200" 
          title= " Titulo N°4" 
          texto=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Officia, labore! Quasi molestias sit fugit cupiditate commodi 
          quos amet" 
          />

          </Col>
          </Row>
        </section>
        </Container>
        </div>
        <div >
          <Myfooter className="mt-5"/>
        </div>
      
    </div>

  )
};

export default App;