import { useDeferredValue, useState, useTransition } from "react";

const box = new Array(10000).fill(0);

function Trans(){
  const [data, setData] = useState();
  const [isPending, startTransition] = useTransition();
  const deferredDataState = useDeferredValue(data); //state를 보관함(감지할 데이터)
  return(
    <>
      <input onChange={(e)=>{
          setData(e.target.value) // 후 순위로 작업해야하는것 transition이용해 후 순위로      
      }}/>
      {
        box.map(()=>{
          return(
            <div>{deferredDataState}</div>
          )
        })
      }
    </>
  )
}

export default Trans;