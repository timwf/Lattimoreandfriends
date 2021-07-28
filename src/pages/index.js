import * as React from "react"
import Layout from "../components/layout"


import { StaticImage } from "gatsby-plugin-image"
import "../index.scss"

import "../scss/layout/home.scss"

const Home = ({ data, location } ) => {


  return (
    <Layout location={location}  className="container">
    <div className="container home">

      <div className="home__inner">
        <h2>Lattimore</h2>
        <h2>Friends</h2>
        <StaticImage
          layout="fixed"
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
    </div>
    </Layout>
  )
}

export default Home

