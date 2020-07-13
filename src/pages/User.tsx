import React from "react"
import Layout from "../components/layout"
import User from "../components/pages/home/home"
import SEO from "../components/seo"

const UserPage = () => (
  <Layout>
    <SEO title="User" />
    <User />
  </Layout>
)

export default UserPage
