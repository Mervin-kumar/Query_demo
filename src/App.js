import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home.Page';
import Flowers from './components/Flowers.Page';
import RqFlowers from './components/RqFlowers.Page';

function App() {
  return (
    <>
    <nav className='header'>
<ul >
  <li><Link to='/'>Home</Link></li>
  <li><Link to='flowers'>Flower</Link></li>
  <li><Link to='RqFlowers'>RqFlowers</Link></li>
</ul>
    </nav>
    <div>
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='flowers' element={<Flowers />} />
    <Route path='rqFlowers' element={<RqFlowers />} />

      </Routes>
    </div>
    </>
  );
}

export default App;
