import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../scss/components/menu.scss"
import {handleMouseHoverRight, handleMouseHoverExit, handleMouseHoverLeft } from '../utils/helpers.js'
import Minus from "../images/minus.svg"
import Plus from "../images/plus.svg"

const Menu = () => {

  function closeMenu(){
    var menu = document.getElementsByClassName('menu')  
    menu[0].classList.remove('active')
  }


  return (
    <div className={"menu"}>

      <div className="menu__header">

        <Link  to="/" className="menu__logo" onClick={e => closeMenu(e)} onMouseEnter={e => handleMouseHoverLeft(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>
          <h1>Lattimore</h1>
          <h1>Friends</h1>
          <Plus />
        </Link> 

        <div className="menu__close"
          onMouseEnter={e => handleMouseHoverRight(e)}
          onMouseLeave={e =>handleMouseHoverExit(e)}
          onClick={e => closeMenu(e)}
          tabIndex={0} 
          role="button"
          onKeyDown={e => closeMenu(e)}
        >
        <Minus />
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
            style={{  height: "auto", paddingBottom: "2px" }}
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
              activeClassName="active"
              className="menu-font" to="/what-we-do">WHAT WE DO</Link>
            <Link 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}     
              activeClassName="active"   
              className="menu-font" to="/what-weve-done">WHAT WE’VE DONE </Link>
            <Link 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}
              activeClassName="active"
              className="menu-font" to="/insights">WHAT WE THINK</Link>
            <Link 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}
              activeClassName="active"
              className="menu-font" to="/who-we-are">WHO WE ARE</Link>
          </div>

          <div className="menu__right-bottom">
            <Link 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}
              activeClassName="active"
              className="menu-font" to="/contact">CONTACT</Link>
            <Link 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}  
              activeClassName="active"      
              className="menu-font" to="/terms">LEGAL</Link>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Menu
