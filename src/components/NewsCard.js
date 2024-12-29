import React from 'react'

const NewsCard = (props) => {
  return (
    <div className='news-card'>
        <div className="news-card-image-container">
            <img src={props.image} />
        </div> 

        <div className="news-card-body">
            
            <div >
                <div className='news-date'>
                    {props.date}
                </div> 

                <h4 className='news-title'>
                    {props.title}
                </h4> 
            </div> 
            
            <div className='news-link'>
                <a href={props.link}>Read More</a>
            
            </div> 
        </div>
    </div>
  )
}

export default NewsCard