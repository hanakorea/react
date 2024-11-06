import { Outlet } from "react-router-dom";

function About(){
  return(
    <>
      <button>회사 소개</button>
      <button>연혁</button>
      <button>오시는 길</button>
      {/* 자식 컴포넌트가 들어감 */}
      <Outlet></Outlet>
    </>
  );
}

export default About;