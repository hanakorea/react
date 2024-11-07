import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header(){
  const navigate = useNavigate(); // 페이지 이동처리 함수(페이지 새로고침 없이 이동시켜주는 함수)
  
  // 로딩, 실패, 로그인에 대한 정보를 가지고있음 => userInfoQuery
  const userInfoQuery = useQuery({
    queryKey:['userInfo'],
    queryFn:async()=>{
      const response = await axios.get('https://raw.githubusercontent.com/Naessss/react_sample_data/main/useinfo.json')
        console.log(response)
        return response.data;
    }, 
    // 재요청 설정 시간
    // staleTime:Infinity// Infinity-한번만 요청
    // 실패시 재 요청
    // retry :2
    // 계속 재요청
    // refetchInterval:30000
  })
  return(
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
        <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Nav style={{color:'white'}}>
        {userInfoQuery.isLoading &&'로딩중'}
        {userInfoQuery.error && '요청에러'}
        {userInfoQuery.data && userInfoQuery.data[0].name}

      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header;