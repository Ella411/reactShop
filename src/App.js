import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [jewerly] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light" className='nav-bar'>
        <Container className='nav-container'>
          <Navbar.Brand href="#home">SHOP</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/" className='link'>홈</Link>
          <Link to="/detail" className='link'>상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path='/' element={
          <>
          <div className='main-bg'></div>
            <Container>
              <Row className='body-row'>
                {
                  jewerly.map(function(a, i){
                    return(
                      <Card jewerly={jewerly[i]}/>
                    )
                  })
                }
              </Row> 
            </Container>
          </>
        }/>

        <Route path='/detail' element={<div>상세페이지</div>}/>
      </Routes>


    </div>
  );
}

function Card(props){
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
