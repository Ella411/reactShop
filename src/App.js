import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';

function App() {

  let [jewerly, setJewerly] = useState(data);
  let navigate = useNavigate();
  let [cnt, setCnt] = useState(1);
  let [loading, setLoading] = useState(false);
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
        <Route path='/' element={ <Main jewerly={jewerly} setJewerly={setJewerly} cnt={cnt} setCnt={setCnt} loading = {loading} setLoading= {setLoading}/> }/>
        <Route path='/detail' element={ <Detail jewerly={jewerly}/> }/>
        <Route path='/detail/:id' element={ <Detail jewerly={jewerly}/> }/>

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
      </Routes>
    </div>
  );
}

function Card(props){
  return(
    <Col sm>
      <img src={process.env.PUBLIC_URL + '/' + (props.jewerly.id + 1) + '.jpg'} width="80%"/>
      <h5>{props.jewerly.title}</h5>
      <p>{props.jewerly.content}</p>
      <p>{props.jewerly.price}</p>
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


        <Button variant="secondary" onClick={()=>{

          // "로딩중 UI 띄우기"
          props.setLoading(true)

          if (props.cnt == 1){
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{ 
              let copy = [...props.jewerly, ...result.data];
              props.setJewerly(copy);
  
            // "로딩중 UI 숨기기"
  
              props.setCnt(props.cnt+1);

              props.setLoading(false);
              // loading이 계속 켜져있음 ,,,,,,, ㅅㅂ ㅋㅋ
              // setTimeout("props.setLoading(false)", 3000)
              ;
            })
            .catch(()=>{
              console.log('실패');
              // "로딩중 UI 숨기기"
            })


          } else if (props.cnt == 2){
            axios.get('https://codingapple1.github.io/shop/data3.json')
            .then((result)=>{ 
              let copy = [...props.jewerly, ...result.data];
              props.setJewerly(copy);
  
            // "로딩중 UI 숨기기"
  
              props.setCnt(props.cnt+1);
              props.setLoading(false);
              // setTimeout("props.setLoading(false)", 3000);


            })
            .catch(()=>{
              console.log('실패');
              // "로딩중 UI 숨기기"
            })


          } else if (props.cnt >= 3){
            console.log(props.cnt);
            props.setLoading(false);
            
            alert("상품이 존재하지 않습니다.")
          }
         
        }}>더보기</Button>

        {
          // 로딩이 뜨긴 드는데 시간이 너무 짧아서 보이지가 않음 ,,,,,,, ㅠ
          props.loading == true 
          ? <Loading />
          : null
        }

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

function Loading(){
  return(
    <>
      <h4> loading ...</h4>
    </>
  )
}



export default App;
