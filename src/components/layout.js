import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Menu from "../components/menu"
import {handleMouseHoverRight, handleMouseHoverExit, handleMouseHoverLeft } from '../utils/helpers.js'

import "../scss/base/base.scss"
import "../scss/components/header.scss"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let top = 0
  let left = 0

  //replace cursor
  function handleMouseMove(ev) {
    top = ev.pageY + "px"
    left = ev.pageX + "px"
    var cursor = document.getElementsByClassName('mouse-cursor')  
    cursor[0].style.left = left 
    cursor[0].style.top = top   
    cursor[0].style.opacity = "1"  
  }

  //open menu
  function openMenu(){
    var menu = document.getElementsByClassName('menu')  
    menu[0].classList.add('active')
  }

  if (isRootPath) {
    header = (
      <div className="header container">
        <div 
          role="button"
          tabIndex={0}
          className="header__open--home" 
          onMouseEnter={e => handleMouseHoverLeft(e)}
          onMouseLeave={e =>handleMouseHoverExit(e)}
          onClick={e => openMenu()}  
          onKeyDown={e => openMenu()}  
        >
          <svg            
            width="44" 
            height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 14.2785V22.7037H26.2226V37H17.7952V22.7037H0V14.2785H17.7952V0H26.2226V14.2785H44Z" fill="#2A2A2A"/>
          </svg>  
        </div> 
        <div 
          role="button"
          tabIndex={0}
          className="header__open" 
          onMouseEnter={e => handleMouseHoverRight(e)}
          onMouseLeave={e =>handleMouseHoverExit(e)}
          onClick={e => openMenu()}
          onKeyDown={e => openMenu()}  
        >
          <svg            
            width="44" 
            height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 14.2785V22.7037H26.2226V37H17.7952V22.7037H0V14.2785H17.7952V0H26.2226V14.2785H44Z" fill="#2A2A2A"/>
          </svg>  
        </div>      
      </div>
    )
  } else {
    header = (
      <div className="header container">
        <StaticImage
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/lf-logo.png"       
          quality={95}
          imgStyle={{ height: "23px", width: "329px" }}
          alt="logo"
        />
        <div 
          role="button"
          tabIndex={0}
          className="header__open" 
          onMouseEnter={e => handleMouseHoverRight(e)}
          onMouseLeave={e =>handleMouseHoverExit(e)}
          onClick={e => openMenu()}   
          onKeyDown={e => openMenu()}  
        >
          <svg            
            width="44" 
            height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 14.2785V22.7037H26.2226V37H17.7952V22.7037H0V14.2785H17.7952V0H26.2226V14.2785H44Z" fill="#2A2A2A"/>
          </svg>  
        </div>        
      </div>
    )
  }

  return (
    <main
    onMouseMove={e => handleMouseMove(e)}
    role="main"
    className="global-wrapper" 
    data-is-root-path={isRootPath}>

      <svg 
        className="mouse-cursor"  
        width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9381 18.0151L34.7451 40.8222L40.8222 34.7451L18.0151 11.9381L18.3015 11.0669C18.3015 11.0669 18.5909 10.7775 20.0468 11.076C21.5028 11.3744 24.7162 14.009 28.7796 12.2848C32.843 10.5605 34.5673 6.49708 34.5673 6.49708L28.1345 0.0643358C28.1345 0.0643358 24.3755 4.4081 19.7303 6.12933C15.0851 7.85056 8.07362 1.99658 8.07362 1.99658L5.17978 4.89041L4.8904 5.17979L1.99657 8.07362C1.99657 8.07362 7.85055 15.0851 6.12932 19.7303C4.40809 24.3755 0.0643263 28.1345 0.0643263 28.1345L6.49707 34.5673C6.49707 34.5673 10.5605 32.843 12.2847 28.7796C14.009 24.7162 11.3744 21.5028 11.076 20.0469C10.7775 18.5909 11.0669 18.3015 11.0669 18.3015L11.9381 18.0151Z" fill="#DC25FD"/>
      </svg>
      <Menu ></Menu>
      <header className="global-header">{header}</header>
      <main>{children}</main>
    </main>
  )
}

export default Layout


