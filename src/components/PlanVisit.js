import React from 'react'


const PlanVisit = (props) => {
  return (
    <div className='discover-container'>
        <div className='discover-left'>
            <div className='top-text'>
              <h1 className='yellow-text'>Discover Your Calling</h1>
              <img className='bushnell-logo'  src={props.logo} alt='Bushnell' />
            </div>

            <div className='left-right-text'>
                <h1>Visit Campus</h1>
                <p className='short-text'>
                  Come see Bushnell for yourself and choose an experience 
                  that is perfect for you. Our campus is made up of avibrant 
                  community committed to your academic, spiritual, and personal development 
                  as you pursue your calling. Click here for more information and to 
                  sign up for one of our many visit experiences. We can’t wait to meet you!
                </p>
                <a className='plan-visit-button' href='https://www.bushnell.edu/undergraduate-admissions/campus-visit/'>
                  <button>Plan Your Visit</button>
                </a>
            </div>

        </div>

        <div className='discover-right'>
           <div className='discover-photo' style={{backgroundImage:'url('+props.image+')'}}> </div> 
        </div>

    </div>
  )
}

export default PlanVisit