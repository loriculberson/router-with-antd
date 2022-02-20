import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import News from './components/news/News'
import Weather from './components/weather/Weather'
import Sports from './components/sports/Sports'
import Sport from './components/sports/Sport'
import Navbar from './components/nav/Navbar'
import './style.css';

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/weather' element={<Weather />}/>
          <Route path='/sports' element={<Sports />}>
            <Route path=":id" element={<Sport />} />   {/* later refers to the <Outlet /> */}  
          </Route>
        </Routes>
      </>
  );
}

export default App;
