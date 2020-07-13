import React from "react"
import Layout from "../components/layout"
import News from "../components/pages/News/News"
import SEO from "../components/seo"

const NewsPage = () => (
  <Layout>
    <SEO title="News" />
    <News />
  </Layout>
)

export default NewsPage
