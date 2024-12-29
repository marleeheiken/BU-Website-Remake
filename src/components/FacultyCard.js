import React from 'react'

const FacultyCard = (props) => {
  return (
    <div className='faculty-card-container'>
            <img className='faculty-card-image' src={props.image} /> 
            <div className='faculty-card'>
                <div className='faculty-gradient'>
                  <h3>{props.fname} {props.lname}</h3>
                  <p>{props.title}</p>
                </div>
            </div>

            <button className="faculty-card-button"> Contact {props.fname} </button>
    </div>
  )
}

export default FacultyCard