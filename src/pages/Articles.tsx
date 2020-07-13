import React from "react"
import Layout from "../components/layout"
import Articles from "../components/pages/Articles/Article"
import SEO from "../components/seo"

const ArticlesPage = () => (
  <Layout>
    <SEO title="Articles" />
    <Articles />
  </Layout>
)

export default ArticlesPage
