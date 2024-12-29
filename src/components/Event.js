import React from 'react'

const Event = (props) => {
  
  return (
    <div className='event-container'>
        <div className='date'>
          <div className='month'>
            {props.month}
          </div>
          <h2 className='day'>
            {props.day}
          </h2>
        </div>

        <div className='event-text'>
            <h3 className='event-title'>
              {props.title}
            </h3>
            <p className='event-text'>
              {props.text}
            </p>
        </div>
    </div>
  )
}

export default Event