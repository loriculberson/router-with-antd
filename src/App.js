import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import News from './components/news/News'
import Weather from './components/weather/Weather'
import Sports from './components/sports/Sports'
import Navbar from './components/nav/Navbar'
import './style.css';

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path='/'element={<Home />}/>
          <Route path='/news'element={<News />}/>
          <Route path='/weather'element={<Weather />}/>
          <Route path='/sports'element={<Sports />}/>
        </Routes>
      </>
  );
}

export default App;
