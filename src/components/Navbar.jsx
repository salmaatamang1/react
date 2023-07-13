import './navbar.css'
import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import newlogo from '../images/newlogo.png'

import {BsPersonCircle} from 'react-icons/bs'
import {links} from '../data'
import {Main} from '../data'


const Navbar = () => {

const [show,setShow]=useState(false);

function handleShow(){
  setShow(!show);
}

  return (
    <>
      <div className="nav">
        <div className='nav__content'>
            <img src={newlogo} className='logo'/>
            <ul className='nav__links'>
              {
                Main.map(({name,path},index)=>{
                return(
                  <li key={index}>
                    <NavLink to={path} className='nav__link'>{name}</NavLink>
                  </li>
                )
                })
              }
            </ul>
        <div className='safaghar__btn' onClick={handleShow}>
        <BsPersonCircle/>
        <div className='showbox'>
        {
          show && <ul> {
            links.map(({name,path},index)=>{
              return(
                <li className='showlist' key={index}>
                  <Link to={path} className='text__container'>{name}</Link></li>
              )

            })
          }</ul>
        }
        </div>
    </div>
            
        </div>
      </div>
        
    </>
  )
}

export default Navbar
