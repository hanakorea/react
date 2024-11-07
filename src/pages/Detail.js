import { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TabContent from "../components/TabContent";
import { addItem, setWatched } from "../redux/store";
import { useDispatch } from "react-redux";

function Detail({fruit}) {
  const {id} = useParams(); // 경로상에 있는 내용 가져오기 -> 상품정보 id
  const isFruit = fruit.find((data)=>data.id == id); //find함수 이용해 있는지 확인
  const[num, setNum] = useState(0);
  const[num2, setNum2] = useState(0);
  const[alert, setAlert] =useState(true);
  const[tabNumber, setTabNumder] = useState(0);
  const dispatch = useDispatch();

  // 의존성 배열 사용가능
  useEffect(()=>{
    console.log(2)
    const timer = setTimeout(()=>{
      console.log(3)
      setAlert(false)
    }, 3000)
    // cleaner function
    return()=>{
      console.log(1)
      clearTimeout(timer);
    }
  },[num2])

  useEffect(()=>{
    let watched = localStorage.getItem('watched');
    watched = JSON.parse(watched);
    if(watched.length === 3 && !watched.includes(id)) // watched.includes -> id가 들어있는지 확인해주는 함수
      watched.pop();
    watched=[id,...watched]
    watched= new Set(watched) // 배열구조를 가진 watch를 set으로 중복제거
    watched=Array.from(watched) // 위치 정보를 가지지 않아 배열로 다시 변경해야함
    localStorage.setItem('watched', JSON.stringify(watched))

    dispatch(setWatched(watched)) // state(watched)에 최근본 상품들 id들어감
  }, [])
  
  if(!isFruit){
    return(
      <h1>해당상품은 없습니다.</h1>
    )
  }
  return (
    <div className="container mt-3">
      {num}
      <button onClick={()=>{
        setNum(num+1)
      }}>버튼</button>

      {num2}
      <button onClick={()=>{
        setNum2(num2+1)
      }}>버튼2</button>
      {
        alert?
        <div className="alert alert-danger">
          지금 구매하면 90% 할인!!
        </div>
       :null
      }
      <div className="row">
        <div className="col-md-6">
        <img src={`https://raw.githubusercontent.com/Naessss/react_sample_data/main/img/${fruit[id].title}.jpg`}/>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{fruit[id].title}</h4>
          <p>{fruit[id].content}</p>
          <p>{fruit[id].price}</p>
          <button className="btn btn-danger" onClick={()=>{
            dispatch(addItem({id:id, title:fruit[id].title, count:1}))
            window.alert('장바구니 추가 완료')
          }}>주문하기</button> 
        </div>
      </div>
      <Nav className="mt-4" justify variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{
            setTabNumder(0);
          }}>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{
            setTabNumder(1);
          }}>리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{
            setTabNumder(2);
          }}>반품,교환정보</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tabNumber={tabNumber}/>
    </div>
  );
}

export default Detail;