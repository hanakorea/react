import { useSelector } from 'react-redux';
import bg from '../aa.jpg'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from '../pages/Detail';
function Watched({fruit}){
    // 임시 상품 데이터
    const watched = useSelector((state)=>state.watched)
    const navigate = useNavigate();
    return (
      <div className="recent-container">
        <div className="cards">
        <p>최근 본 상품</p>
          {watched.map((item) => (
            <div className="card" key={item.id} onClick={()=>{navigate(`/detail/${fruit[item].id}`)}}>
              <img src={`https://raw.githubusercontent.com/Naessss/react_sample_data/main/img/${fruit[item].title}.jpg`} alt={fruit[item].title} />
              <p>{fruit[item].title}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Watched;