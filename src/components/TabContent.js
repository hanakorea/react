import { useEffect, useState } from "react";

function TabContent({tabNumber}){
  const [fade, setFade] = useState(null);

  useEffect(()=>{

    const timer = setTimeout(()=>{
      setFade('end')

    }, 10)
    return()=>{
      clearTimeout(timer);
      setFade(null);
    }
  },[tabNumber])
  return(
    <div className={"start" +fade}>
      {[<div>상세</div>, <div>리뷰</div>, <div>반품</div>][tabNumber]}
    </div>
  )
  if(tabNumber == 0){
    return(
      <div>상세정보 컴포넌트</div>
    );
  }else if(tabNumber == 1){
    return(
      <div>리뷰 컴포넌트</div>
    );
  }else if(tabNumber == 2){
    return(
      <div>반품, 교환정보 컴포넌트</div>
    );
  }  
}

export default TabContent;