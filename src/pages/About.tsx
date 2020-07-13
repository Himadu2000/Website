import React from "react"
import Layout from "../components/layout"
import About from "../components/pages/About/About"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <About />
  </Layout>
)

export default AboutPage
