import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import News from './components/news/News'
import Weather from './components/weather/Weather'
import Sports from './components/sports/Sports'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFutbol, faNewspaper, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
      <>
        <nav>
          <NavLink to='/'>Home 
            <FontAwesomeIcon icon={faHouse}/>
          </NavLink>

          <NavLink to='/news'>News
            <FontAwesomeIcon icon={faNewspaper}/>
          </NavLink>

          <NavLink to='/weather'>Weather
          <FontAwesomeIcon icon={faTemperatureHalf}/>
          </NavLink>

          <NavLink to='/sports'>Sports
            <FontAwesomeIcon icon={faFutbol}/>
          </NavLink>
        </nav>
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
