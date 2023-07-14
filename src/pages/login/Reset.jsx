import React from 'react'
import './reset.css'
const Reset = () => {
  return (
    <div className='reset__container'>
      <form>
        
        <span>Enter your Email or Phone number:  <input type="text" name='Email/Phone number'/></span>
        <button className="btn">Submit</button>

      </form>
    </div>
  )
}

export default Reset