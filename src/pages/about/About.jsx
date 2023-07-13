import Footer from '../../components/Footer'
import './about.css'
import Image1 from '../../images/how.png'

import React from 'react';

const About = () => {
  return (
    <div>

      <div className='main'>

        <div className='sub-main'>

          <div className='left-side'>
             <h2>Why Safa Sahar?</h2>
             <p>
              Safa Sahar focus on managing the solid waste which has been major problem in Nepal due to improper and
            less recycle of 3R waste.
            Creates awareness among people about waste Management.
         
            Focus on managing the solid wastage which has been major problem in Nepal
            </p> 
          </div>

          <div className='right-side'>
            <h2>How Safa Sahar works?</h2>
            <img src={Image1} alt="how it works"/>
          </div>
        </div>
      </div>
       <Footer/> 
    </div>
  )
}

export default About
