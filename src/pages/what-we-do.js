// Step 1: Import your component
import * as React from 'react'
import Layout from "../components/layout"
// Step 2: Define your component
const AboutPage = ({ data, location }) => {
  return (
    <Layout location={location}  className="container">
      <title>About Me</title>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage