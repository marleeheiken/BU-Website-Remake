import React from 'react'

const InlineSection = ({children, image, imageAlignment}) => {
  return (
    <div className={`inline-section ${imageAlignment === "left" ? "reverse" : ""}`}>
      <div className='inline-section-text-container'>
        {
            children
        }
      </div>

      <div className="inline-image-container">
        <img className="inline-image" src={image}/>
      </div>
    </div>
  )
}

export default InlineSection