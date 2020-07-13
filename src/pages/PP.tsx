import React from "react"
import Layout from "../components/layout"
import PP from "../components/pages/home/home"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="PP" />
    <PP />
  </Layout>
)

export default IndexPage
