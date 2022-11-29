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
          {
            jewerly.map(function(a, i){
              return(
                <Modal jewerly={jewerly[i]}/>
              )
            })
          }
        </Row>
      </Container>

    </div>
  );
}

function Modal(props){
  return(
    <Col sm>
      <img src={process.env.PUBLIC_URL + '/' + (props.jewerly.id +1) + '.jpg'} width="80%"/>
      <h5>{props.jewerly.title}</h5>
      <p>{props.jewerly.price}</p>
      <p>{props.jewerly.material}</p>
    </Col>
  )
}

export default App;
