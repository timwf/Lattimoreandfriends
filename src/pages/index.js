import * as React from "react"
import Layout from "../components/layout"
import Plus from "../images/plus.svg"
import { StaticImage } from "gatsby-plugin-image"
import "../index.scss"
import { Link } from "gatsby"
import {handleMouseHoverRight, handleMouseHoverExit, handleMouseHoverLeft } from '../utils/helpers.js'

import "../scss/layout/home.scss"

const Home = ({ data, location } ) => {

  //open menu
  function openMenu(){
    var menu = document.getElementsByClassName('menu')  
    menu[0].classList.add('active')
  }

  function closeMenu(){
    var menu = document.getElementsByClassName('menu')  
    menu[0].classList.remove('active')
  }


  return (
    <Layout location={location}  className="container">
    <div className="container home">
      <div className="home__header" >

        <Link to="/" className="menu__logo" onClick={e => closeMenu(e)} onMouseEnter={e => handleMouseHoverLeft(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>
          <h1>Lattimore</h1>
          <h1>Friends</h1>
          <Plus />
        </Link> 


        <Plus 
          className="home-plus-left"
          onMouseEnter={e => handleMouseHoverLeft(e)}
          onMouseLeave={e =>handleMouseHoverExit(e)}
          onClick={e => openMenu()}  
        
        />
        <Plus 
          className="home-plus-right"
          onMouseEnter={e => handleMouseHoverRight(e)}
          onMouseLeave={e =>handleMouseHoverExit(e)}
          onClick={e => openMenu()}  
        
        />
      </div>

      <div className="home__inner">
        <h2>Lattimore</h2>
        <h2>Friends</h2>
        
        <StaticImage
      
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/home-image.png"       
          quality={95}
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ border: "solid black" }}
          alt="Profile picture"
        />
        
        <h2>the agencies'</h2>
        <h2>web agency</h2>
      </div>
      <h3>the agencies' web agancy</h3>
    </div>
    </Layout>
  )
}

export default Home

