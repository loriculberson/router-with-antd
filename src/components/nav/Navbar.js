import '../../style.css';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFutbol, faNewspaper, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
  return (
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
  )
}