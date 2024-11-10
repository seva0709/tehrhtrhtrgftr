import React from 'react'
import './Hero.scss'

const Hero = ({image,name,text,button}) => {
  return (
    <>
    <hero className="hero">
        <div className="container">
            <div className="hero__wrapper">
                <img src={image} />
                <div>
                    <h2>{name}</h2>
                    <p>{text}</p>
                    <button>{button}</button>
                </div>
                
            </div>
            
        </div>
    </hero>
    </>
  )
}

export default Hero