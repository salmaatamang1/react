import {Link} from 'react-router-dom'
import Image from '../images/pp1.jpg'

const MainHeader = () => {
  return (
    <header className="main__header">
<div className="container main__header-container">
  <div className="main__header-left">
<h4>Reduce,Reuse,Recycle</h4>
<h1>Recycle Starts Here !</h1>
<p>The 3R approach to waste management - reduce,
   reuse, and recycle - has emerged as a sustainable
    strategy to address the growing problem of waste
     generation and disposal. This approach emphasizes 
     reducing waste at the source, reusing items as much as
      possible, and recycling materials that cannot be 
      reused. Successful implementation of the 3R approach 
      requires a collaborative effort 
  between governments, businesses, and individuals</p>
<Link to="/register" className='btn lg'>Lets Start...</Link>
  </div>
  <div className="main__header-right">
    <img src={Image} alt="Main Header Image" />
  </div>
</div>
    </header>
  )
}

export default MainHeader
