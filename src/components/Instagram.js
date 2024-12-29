import React from 'react'

const Instagram = (props) => {
  return (
    <div className='connectwUs-container'>

<div className='connectwUs-text-container'>
  <p className='connectwUs-text'>Connect With Us</p>

  <div className="socials2">
    <a href='https://www.facebook.com/BushnellUniversity/' target='blank_'>  
      <i className="fa-brands fa-facebook-f"></i>
    </a>
    <a href='https://www.instagram.com/bushnelluniversity/' target='blank_'>
      <i className="fa-brands fa-instagram"></i>
    </a>
    <a href='https://twitter.com/bushnelluniv' target='blank_'>
      <i className="fa-brands fa-x-twitter"></i>
    </a>
    <a href='https://www.youtube.com/bushnelluniversity' target='blank_'>
      <i className="fa-brands fa-youtube"></i>
    </a>
    <a href='https://www.linkedin.com/school/bushnell-university/' target='blank_'>
      <i className="fa-brands fa-linkedin-in"></i>
    </a>
  </div>
</div>
        <img className="instagram" src={props.image} />
    </div>
  )
}

export default Instagram