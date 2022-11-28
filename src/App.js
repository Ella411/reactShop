import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';

function App() {
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
          <h5>체인</h5>
          <p>₩840,000<br></br>아르젠토 오로 지알로</p>
        </Col>
        <Col sm>
          <img src={process.env.PUBLIC_URL + '/2.jpg'} width="80%"/>
          <h5>에센셜</h5>
          <p>₩1,165,000<br></br> 실버</p>
        </Col>
        <Col sm>
          <img src={process.env.PUBLIC_URL + '/3.jpg'} width="80%"/>
          <h5>볼트</h5>
          <p>₩820,000<br></br>옐로우 골드</p>
        </Col>
      </Row>
    </Container>


    </div>
  );
}

export default App;
