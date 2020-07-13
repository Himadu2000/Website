import React from "react"
import Layout from "../components/layout"
import Sitemap from "../components/pages/home/home"
import SEO from "../components/seo"

const SitemapPage = () => (
  <Layout>
    <SEO title="Sitemap" />
    <Sitemap />
  </Layout>
)

export default SitemapPage
