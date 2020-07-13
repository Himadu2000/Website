import React from "react"
import Layout from "../components/layout"
import Blog from "../components/pages/Blog/Blog"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Blog />
  </Layout>
)

export default BlogPage
