import { Link, NavLink} from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import { links} from '../data'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
      <Link to="/" className='logo'>
        <img src={Logo} alt="Nav logo"/>
      </Link>
<ul className='nav__links'>
    {
        links.map(({name, path}, index) =>{
            return(
                <li key={index}>
                    <NavLink to ={path} className='safasahar_link'> {name}  </NavLink>
                </li>
            )
        })
    }
</ul>
      </div>   
    </nav>
  )
}


export default Navbar;
