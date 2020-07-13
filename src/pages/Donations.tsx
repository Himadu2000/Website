import React from "react"
import Layout from "../components/layout"
import Donations from "../components/pages/Donations/About"
import SEO from "../components/seo"

const DonationsPage = () => (
  <Layout>
    <SEO title="Donations" />
    <Donations />
  </Layout>
)

export default DonationsPage
