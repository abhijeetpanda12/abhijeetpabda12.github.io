import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <p>This is Abhijeet Panda.</p>
    <p>
      I am a Masters Student at IIIT Hyderabad and this website is my personal
      homepage.
    </p>
    <p>Its under development now. Do visit soon once it's updated.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
