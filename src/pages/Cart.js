import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, changeArr, changeNum, minusNum, plusNum, removeItem } from "../redux/store";
import { memo, useMemo, useState } from "react";

const Test= memo(()=>{
  console.log('test relandering')
  return(
    <div>
      테스트용 컴포넌트
    </div>
  )
})

// 재귀함수 : 자기 자신을 리턴
const fibo=(n)=>{
  if(n<=1)
    return n;
  return fibo(n-1) + fibo(n-2);
}

function Cart() {
  const cart = useSelector((state)=>state.cart)
  const dispatch = useDispatch();
  const [num, setNum] =useState(0);
  const [n, setN] = useState(10)

  const r = useMemo(()=>{
    console.log('작동됨')
    return(
      fibo(n)
    )
  },[])

  return (
    <>
      <div>
        <input type="number" value={n} onChange={()=>{

        }}/>
        <p>피보나치({n}) : {r}</p>
      </div>
    <Test />
    {num}
    <button onClick={()=>{
      setNum(num+1)
    }}>
      +
    </button>

    <Table>
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((data,i)=>{
          return(
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.count}</td>
              <td><button onClick={()=>{
                dispatch(addCount(data.id))
              }}>추가</button></td>
              <td><button className="btn btn-danger"
               onClick={()=>{
                dispatch(removeItem(data.id))
              }}>삭제</button></td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    </>
  );
}

export default Cart;