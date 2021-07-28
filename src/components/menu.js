import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../scss/components/menu.scss"
import {handleMouseHoverRight, handleMouseHoverExit } from '../utils/helpers.js'

const Menu = () => {

  function closeMenu(){
    var menu = document.getElementsByClassName('menu')  
    menu[0].classList.remove('active')
  }


  return (
    <div className={"menu"}>

      <div className="menu__header">
        <div className="menu__logo">
          <h1>Lattimore</h1>
          <h1>Friends</h1>
          <svg            
            width="44" 
            height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 14.2785V22.7037H26.2226V37H17.7952V22.7037H0V14.2785H17.7952V0H26.2226V14.2785H44Z" fill="#2A2A2A"/>
          </svg>  

        </div>

        <div className="menu__close"
          onMouseEnter={e => handleMouseHoverRight(e)}
          onMouseLeave={e =>handleMouseHoverExit(e)}
          onClick={e => closeMenu(e)}
          tabIndex={0} 
          role="button"
          onKeyDown={e => closeMenu(e)}
        >
          <svg 
            width="44" height="8" viewBox="0 0 44 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="44" height="8" fill="#DC25FD"/>
          </svg>
        </div>
      </div>



       <div className="menu__inner">
        <div className="menu__left">
          <StaticImage
            className="bio-avatar"
            layout="constrained"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/home-image.png"       
            quality={95}
            style={{  width: "90%", height: "auto", paddingBottom: "2px" }}
            imgStyle={{ height: "auto", border: "solid black" }}
            alt="home-image"
          />
          <p>We’re happy to be as white-labelled as you need.</p>
        
        </div>
        <div className="menu__right">
          <div className="menu__right-top">
            <Link 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}
              className="menu__link" to="/">WHAT WE DO</Link>
            <Link 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}        
              className="menu__link" to="/what-we-do">WHAT WE’VE DONE </Link>
            <Link 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}
              className="menu__link" to="/">WHAT WE THINK</Link>
            <Link 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}
              className="menu__link" to="/">WHO WE ARE</Link>
          </div>

          <div className="menu__right-bottom">
            <Link 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}
              className="menu__link" to="/">CONTACT</Link>
            <Link 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}        
              className="menu__link" to="/what-we-do">LEGAL</Link>

          </div>

        </div>

       </div>

    </div>
  )
}

export default Menu
