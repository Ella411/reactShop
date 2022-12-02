import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YelloBtn = styled.button `
  background : ${ props => props.bg };
  color : black;
  padding : 10px;
`
let Box = styled.div`
  background : grey;
  padding : 20px;
`

function Detail(props){
 
  let [count,setCount] = useState(0);

  // 변수 이름 alert로 만들어서 alert 기능이 사용이 안됨 하 ㅗㅗㅗㅗㅗㅗ
  let [alert_a, setAlert] = useState(true);
  let {id} = useParams();
  let findJewerly = props.jewerly.find(function(x){
    return x.id == id
  });
  let [input, setInput] = useState('');
  let [tab, setTab] = useState(0);

  useEffect(()=>{
    // let a = setTimeout(()=>{ setAlert(false) }, 2000 )
    // console.log(2)
    console.log(id) 
    if (isNaN(input) == true) {
      alert('숫자만')
    }
    // return ()=> {
    //   console.log(1)
    //   clearTimeout(a)
    // }
  }, [input])
 
    return(
      
        <div className='container'>
{/* 
          {aler t_a == true ? <div className="alert alert-warning">2초 이내 구매시 할인</div> : null}
          {count}
          <button onClick={()=>{ setCount(count + 1) }}> button </button><br></br>
          <input onChange={ (e)=>{
            setInput(e.target.value)
            console.log(isNaN(input))
          }}></input> */}

          <div className='row'>
            <div className='col-md-6'>
              <img src={process.env.PUBLIC_URL + '/' + (findJewerly.id + 1) + '.jpg'} width='80%'/>
            </div>
  
            <div className='col-md-6'>
              <h4 className='pt-5'>{findJewerly.title}</h4>
              <p>{findJewerly.content}</p>
              <p>{findJewerly.price}</p>
              <button className='btn btn-danger'>주문하기</button>
            </div>
          </div>
  

          <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent tab={tab}/>






        </div>
    )
  }


                  // props 대신 {tab} 쓸 수 있음 
  function TabContent({tab}){
    let [fade, setFade] = useState(''); 

    useEffect(()=>{
      setTimeout(()=>{setFade('end')}, 10)
      return()=>{
        setFade('')

      }

      // tab 변경될 때마다 코드 실행해줌 
    }, [tab])

   return (<div className={`start ${fade}`}>
    {[<div>내용0</div>,  <div>내용1</div>,  <div>내용2</div>][tab]}
    </div>)
  }


  export default Detail;
