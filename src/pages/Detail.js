import { useParams } from "react-router-dom";

function Detail(props){

  let {id} = useParams();
  let findJewerly = props.jewerly.find(function(x){
    return x.id == id
  });
  console.log(findJewerly.title)


    return(
        <>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={process.env.PUBLIC_URL + '/' + (findJewerly.id + 1) + '.jpg'} width='80%'/>
            </div>
  
            <div className='col-md-6'>
              <h4 className='pt-5'>{findJewerly.title}</h4>
              <p>{findJewerly.material}</p>
              <p>{findJewerly.price}</p>
              <button className='btn btn-danger'>주문하기</button>



            </div>

          </div>
  
        </div>
        </>
    )
  }
  

  export default Detail;
