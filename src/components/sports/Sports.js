import { useState } from 'react'
import './sport.css'
import sportsData from '../../data/sportsData'
import { NavLink, Outlet } from 'react-router-dom'

export default function Sports(){
  const [selectedSport, setSelectedSport ] = useState()

  const sportLinks = sportsData.map(sport => {
    return (
      <li key={sport.id} onClick={() => setSelectedSport(sport)}>
        <NavLink to={`/sports/${sport.id}`}>
          {sport.title}
        </NavLink>
      </li>
    )
  })

  return(
    <div>
      <h1>Welcome to the Sports Section</h1>
      <div className="flex-container">
        <div className="sports-nav">
          <ul>{sportLinks}</ul>
        </div>
        <div className="sports-main">
          <Outlet context={[selectedSport, setSelectedSport]} />     
              {/* references the children routes of the Sports component */}        
        </div>
      </div>
    </div>
  )
}