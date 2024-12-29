import React from 'react'

const ImageCard = (props) => {
  return (

        <a className='card-container' href={props.link} target='_blank'>
            <div style={{backgroundImage:`url(${props.image})`}} className='image-card'>
                <div className='card-gradient'>
                  {props.text}
                </div>
            </div>
        </a>

  )
}

export default ImageCard