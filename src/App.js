import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import aa from "./aa.jpg"
import data from "./mokData";
import { useEffect, useState } from 'react';
import Card from './components/Card';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Detail from './pages/Detail';
import About from './pages/About';
import styled from 'styled-components';
import axios from 'axios';
import Cart from './pages/Cart';

const Btn = styled.button`
  background:${props=>props.background};
  color: ${props=>props.background == 'red'? 'white':'black'};
  font-size:25px;
  border:1px soild black;
`;

const Div = styled.div`
  font-size:26px;
  padding:20px;
`;
// 상속 받아서 사용(추가적인 설정하고 싶은 경우)
const NewBtn = styled(Btn)`
  width:200px;
  height:150px;
`;

function App() {
  const [fruit, setFruit] = useState([]);
  const [fruitCount, setFruitCount] = useState(3)
  useEffect(()=>{
    axios.get('https://raw.githubusercontent.com/Naessss/react_sample_data/main/fruit.json')
      .then((response)=>{
        setFruit([...response.data])
      })
      .catch((error)=>{
        console.log(error);
      })
  }, [])

  return (
    <div className="App">  
      <Header />
      <Routes>
        <Route path='/' element={<Main fruit={fruit} fruitCount={fruitCount} setFruitCount={setFruitCount}/>}/>
        <Route path='/detail/:id' element={<Detail fruit={fruit}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About />}>
          <Route path='intro' element={<h1>회사 소개</h1>}/>
          <Route path='hist' element={<h1>연혁</h1>} />
          <Route path='loca' element={<h1>오시는 길</h1>}/>
        </Route>

        {/* 잘못 입력했을때-404는 맨마지막에 가장 밑에 넣을것!!! */}
        <Route path='*' element={<h1>Page Not Found 404</h1>}/>
      </Routes>
 
    </div>
  );
}

export default App;

