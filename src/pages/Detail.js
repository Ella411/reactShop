import { useEffect, useState } from "react";
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
        <>
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
  
        </div>
        </>
    )
  }
  

  export default Detail;
