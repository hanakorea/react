import { useNavigate } from "react-router-dom";

function Card({fruit}){
  const navigate = useNavigate();
  return(
  <div className='col-md-4' onClick={()=>{
    navigate('/detail/'+fruit.id)
  }} style={{cursor:'pointer'}}>
    <img src={`https://raw.githubusercontent.com/Naessss/react_sample_data/main/img/${fruit.title}.jpg`}/>
    <h4>{fruit.title}</h4>
    <p>{fruit.content}</p>
  </div> 
  ) 
}

export default Card;
