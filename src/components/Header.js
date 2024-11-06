import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header(){
  const navigate = useNavigate(); // 페이지 이동처리 함수(페이지 새로고침 없이 이동시켜주는 함수)
  return(
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
        <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header;