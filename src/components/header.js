import PropTypes from "prop-types"
import React from "react"
import Image from './Image'
import './header.css'

const Header = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  large, 
  className = ''
 }) => {
    if(large) className += ' PageHeader-large' 
   return (
    <header className={`PageHeader relative ${className}`}>
          
          { backgroundImage && (
                <Image  
                    background
                    resolutions="large"
                    imgSrc={backgroundImage}
                    alt={title}
                    size="cover" 
                />
          )}
     
          <div className="container relative">
            <h1 className="PageHeader--Title">{title}</h1>
            <p className="Content PageHeader--Subtitle">{subtitle}</p>
          </div>
          
     </header>
   )
 }

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Header
