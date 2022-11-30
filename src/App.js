import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';

function App() {

  let [jewerly, jewerlySort] = useState(data);
  let navigate = useNavigate();

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
        <Route path='/' element={ <Main jewerly={jewerly}/> }/>
        <Route path='/detail' element={ <Detail jewerly={jewerly}/> }/>

        {/* Nested Routes */}
        <Route path='/about' element={ <About/> }>
          <Route path='member' element={ <div>member</div> }/>
          <Route path='location' element={ <div>location</div> }/>
        </Route>

        <Route path='/event' element={ <Event/> }>
          <Route path='one' element={ <div>첫 주문 포인트 적립</div> }/>
          <Route path='two' element={ <div>생일기념 쿠폰받기</div> }/>
        </Route>

        <Route path='*' element={ <div>404</div> }/>

        <Route path='/detail/:id' element={ <Detail jewerly={jewerly}/> }/>

      </Routes>
    </div>
  );
}

function Card(props){
  return(
    <Col sm>
      <img src={process.env.PUBLIC_URL + '/' + (props.jewerly.id + 1) + '.jpg'} width="80%"/>
      <h5>{props.jewerly.title}</h5>
      <p>{props.jewerly.price}</p>
      <p>{props.jewerly.material}</p>
    </Col>

  )
}

function Main(props){
  return(
      <>
      <div className='main-bg'></div>

      <Container>
        <Row className='body-row'>
          {
            props.jewerly.map(function(a, i){
              return(
                <Card jewerly={props.jewerly[i]}/>
              )
            })
          }
        </Row> 
      </Container>

      </>


  )
}

function About(){
  return(
      <div>
        <h4>회사 정보</h4>
        <Outlet></Outlet>
      </div>
  )
}

function Event(){
  return(
      <div>
        <h4>오늘의 이벤트</h4>
        <Outlet></Outlet>
      </div>
  )
}


export default App;
