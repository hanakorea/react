import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, changeArr, changeNum, minusNum, plusNum, removeItem } from "../redux/store";

function Cart() {
  const cart = useSelector((state)=>state.cart)

  const dispatch = useDispatch();
  
  return (
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
  );
}

export default Cart;