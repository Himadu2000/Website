import React from "react"
import Layout from "../components/layout"
import Gallery from "../components/pages/gallery"
import SEO from "../components/seo"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <Gallery />
  </Layout>
)

export default GalleryPage
