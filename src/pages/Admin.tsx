import React from "react"
import Layout from "../components/layout"
import Admin from "../components/pages/Admin/Admin"
import SEO from "../components/seo"

const AdminPage = () => (
  <Layout>
    <SEO title="Admin" />
    <Admin />
  </Layout>
)

export default AdminPage
