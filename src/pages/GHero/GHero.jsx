import React from 'react';
import './gHero.css'
import Footer from '../../components/Footer'
import {gcollector} from '../../data.js'
const GHero = () => {
  return (
    <div>
      <div className='main_container'>
    <h2>Our Hero</h2>
    <ul>
      {
        gcollector.map((gcollectors)=> <li key={gcollectors.gid}>
        <img src={gcollectors.photo} alt={gcollectors.name}/><br/>
        <h4>Name:{gcollectors.name}</h4><br/>
        <h4>Address:{gcollectors.address}</h4><br/>
        <h4>Number:{gcollectors.phonenumber}</h4>
        

        </li>)
      }
      </ul>  
   </div>
      
      <Footer/>
    </div>
  )
}

export default GHero
