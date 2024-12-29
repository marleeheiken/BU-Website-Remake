import React from 'react'


const Hero = (props) => {

  
  return (
    <div 
    className='hero' 
    style={{backgroundImage:`url(${props.image})`}} >
      <div className='hero-gradient'></div>

      <div className='hero-container-left'>

        <div className='hero-text'>
          <div className='little-line'></div>
          <h2 className='subtitle'>
            {props.subtitle}
          </h2>

          <h1 className='title'>
            {props.title}
          </h1>
        </div>
        
          <div className="hero-buttons">
            {
              props.buttons.map((button) => {
                 return (
                  <a className='button-link' href={button.link} target='blank_'>
                    <button className={button.type === "primary" ? "primary-button" : "secondary-button"} >{button.text}</button> 
                    {/* ternary expression */}
                  </a> 
                 )
              })
            }

          </div>

      </div>
  
   
      <div className='hero-container-right'>  </div>
   
   
    </div>
  )
}

export default Hero