import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import data from './data.js';

function App() {

  let [jewerly] = useState(data);

  return (
    <div className="App">

      <Navbar bg="light" variant="light" className='nav-bar'>
        <Container className='nav-container'>
          <Navbar.Brand href="#home">SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <Container>
      <Row className='body-row'>
        <Col sm>
                   {/* public 폴더 이미지쓰는 권장 방식 */}
          <img src={process.env.PUBLIC_URL + '/1.jpg'} width="80%"/>
          <h5>{jewerly[0].title}</h5>
          <p>{jewerly[0].content}</p>
          <p>{jewerly[0].material}</p>
        </Col>
        <Col sm>
          <img src={process.env.PUBLIC_URL + '/2.jpg'} width="80%"/>
          <h5>상품명</h5>
          <p>가격</p>
          <p>소재</p>
        </Col>
        <Col sm>
          <img src={process.env.PUBLIC_URL + '/3.jpg'} width="80%"/>
          <h5>상품명</h5>
          <p>가격</p>
          <p>소재</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
