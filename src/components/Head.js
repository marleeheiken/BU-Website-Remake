import React, {useEffect, useState, useRef} from 'react'
import LogoLight from '../images/logo-light.png'
import {Link} from "react-router-dom";

const Head = () => {
  const [sticky, setSticky] = useState(false)
  const navRef = useRef()
 

  useEffect(() => {
    const makeNavSticky = () => {
      console.log("offset",navRef.current.offsetTop);
      console.log("scrolly",window.scrollY );
      console.log("sticky",sticky );

      if (window.scrollY >= navRef.current.offsetTop) {    
        setSticky(true)
      } else {
        setSticky(false);    
      }

    }
    window.addEventListener('scroll', makeNavSticky);
    return () => window.removeEventListener("scroll", makeNavSticky)
  })
  
  return (
    <div className='main'>
        <div className="container">
          <div className="container-left">
            <img src={LogoLight} alt="Logo" width={300}/>
          </div>

          <div className="container-middle"></div>

          <div className="container-right">
              <div className="info-container">
              
                <div className="socials">
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

                <p href="tel:5416847201" className="phoneNumber"> (541) 684-7201</p>

              </div>
          </div>
 
        </div>

        <div className={`nav-container `} ref={navRef}>
            <div className={`nav-bar ${sticky ? "sticky" : ""}`}>
              <Link to={'/'}>Home</Link>
              <Link to={'/academics'}>Academics</Link>
              <Link to={'/admissions'}>Admissions</Link>
              <Link to={'/athletics'}>Athletics</Link>
              <Link to={'/beacon-life'}>Beacon Life</Link>
              <Link to={'/about'}>About</Link>
            </div>
        </div>

    </div>
   
  )
}

export default Head