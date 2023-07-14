
import React from 'react'
import './naghome.css'
import {Link} from 'react-router-dom'
const NagHome = () => {
  return (
    <div>
      <div className='main__container__box'>
          <h2>Nagarik DashBoard</h2>
          <ul>
              <li><h3>Total 3RWaste Dumped</h3>
              <h4>25KG</h4></li>
              <li><h3>Total Income</h3>
              <h4>Rs.1200</h4></li>
              <li><h3>Total Donation</h3>
              <h4>Rs.500</h4></li>
          </ul>

        </div>
        <Link to="/osm" className='btn__lg'>Lets Recycle</Link>
    </div>
  )
}

export default NagHome
